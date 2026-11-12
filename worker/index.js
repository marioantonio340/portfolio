export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/duolingo") {
      const username = url.searchParams.get("username") || "mario.fer";
      try {
        const upstream = await fetch(
          `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(username)}`,
          {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              Accept: "application/json",
            },
            cf: {
              cacheTtl: 3600,
              cacheEverything: true,
            },
          }
        );

        if (!upstream.ok) {
          return new Response(
            JSON.stringify({ error: `Upstream error: ${upstream.status}` }),
            {
              status: upstream.status,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
        }

        const data = await upstream.json();
        const user = data.users && data.users[0];

        if (!user) {
          return new Response(JSON.stringify({ error: "User not found" }), {
            status: 404,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });
        }

        const payload = {
          username: user.username,
          name: user.name,
          picture: user.picture
            ? (user.picture.startsWith("//") ? `https:${user.picture}` : user.picture)
            : null,
          streak: user.streak || 0,
          totalXp: user.totalXp || 0,
          learningLanguage: user.learningLanguage || "en",
          fromLanguage: user.fromLanguage || "pt",
          courses: (user.courses || []).map((c) => ({
            title: c.title,
            xp: c.xp,
            learningLanguage: c.learningLanguage,
          })),
        };

        return new Response(JSON.stringify(payload), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    }

    // Pass through to static assets
    return env.ASSETS.fetch(request);
  },
};

