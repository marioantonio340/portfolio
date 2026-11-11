import { calculateAgeBreakdown } from "./useRealtimeAge";

describe("calculateAgeBreakdown", () => {
  const birth = { year: 1998, month: 8, day: 6 };

  it("computes exact age right before birthday", () => {
    const beforeBirthday = new Date(2026, 7, 5, 23, 59, 59);
    const result = calculateAgeBreakdown(beforeBirthday, birth);

    expect(result.years).toBe(27);
    expect(result.months).toBe(11);
    expect(result.days).toBe(30);
    expect(result.hours).toBe(23);
    expect(result.minutes).toBe(59);
    expect(result.seconds).toBe(59);
    expect(result.formattedClock).toBe("23:59:59");
  });

  it("computes exact age on birthday", () => {
    const onBirthday = new Date(2026, 7, 6, 0, 0, 0);
    const result = calculateAgeBreakdown(onBirthday, birth);

    expect(result.years).toBe(28);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.formattedClock).toBe("00:00:00");
  });

  it("computes exact age after birthday with months and days", () => {
    const target = new Date(2026, 10, 11, 14, 45, 30);
    const result = calculateAgeBreakdown(target, birth);

    expect(result.years).toBe(28);
    expect(result.months).toBe(3);
    expect(result.days).toBe(5);
    expect(result.hours).toBe(14);
    expect(result.minutes).toBe(45);
    expect(result.seconds).toBe(30);
    expect(result.formattedClock).toBe("14:45:30");
  });
});

