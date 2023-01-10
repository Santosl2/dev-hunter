/* eslint-disable import/no-extraneous-dependencies */
import { rest } from "msw";

export const emptyHandlers = [
  rest.get("*/api/users/me", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get("https://api.github.com/users/*", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
