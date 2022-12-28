export type User = {
  _id: string;
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  bio: string;
  seniority?: string;
  categories?: string[];
};
