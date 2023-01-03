import { Categories } from "../interfaces";

export const SKILLS: Categories[] = [
  {
    id: 1,
    title: "Frontend Developer",
    color: "red",
  },

  {
    id: 2,
    title: "Backend Developer",
    color: "green",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    color: "yellow",
  },
  {
    id: 4,
    title: "Mobile Developer",
    color: "purple",
  },
  {
    id: 5,
    title: "DevOps",
    color: "light-blue",
  },
  {
    id: 6,
    title: "Data Scientist",
    color: "purple",
  },
  {
    id: 7,
    title: "Data Engineer",
    color: "pink",
  },
  {
    id: 8,
    title: "Machine Learning Engineer",
    color: "teal",
  },
  {
    id: 9,
    title: "AI Engineer",
    color: "emerald",
  },
];

export const SKILLS_IDS = SKILLS.map((category) => category.id.toString());
