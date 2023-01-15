/* eslint-disable import/no-extraneous-dependencies */
import { rest } from "msw";

import { DEVELOPERS_MOCK } from "../data/developers";
import { USER_REPOS } from "../data/repos";

export const handlers = [
  rest.get("*/api/users/me", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get("*/api/developers", (req, res, ctx) => {
    const seniorities = req.url.searchParams.get("seniorities") ?? "";
    const skills = req.url.searchParams.get("skills") ?? "";
    const contractTypes = req.url.searchParams.get("contractTypes") ?? "";

    const filteredDevelopers = DEVELOPERS_MOCK.rows.filter(
      (developer) =>
        developer.seniority === Number(seniorities) ||
        developer.contract_type.includes(contractTypes) ||
        developer.skills.includes(skills)
    );

    const filteredRows = filteredDevelopers && {
      rows: filteredDevelopers,
    };

    return res(ctx.status(200), ctx.json(filteredRows));
  }),
  rest.get("https://api.github.com/users/*", (req, res, ctx) => {
    return res(ctx.json(USER_REPOS));
  }),
];
