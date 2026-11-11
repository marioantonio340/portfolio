import { projectsList, stackCategories } from "./portfolioData";

export const ProjectList = projectsList;

export const stackList = stackCategories.flatMap((category) =>
  category.items
    .filter((item) => Boolean(item.icon))
    .map((item) => ({
      img: item.icon,
      name: item.name,
    }))
);
