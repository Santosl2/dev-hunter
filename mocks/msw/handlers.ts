/* eslint-disable import/no-extraneous-dependencies */
import { rest } from "msw";

export const handlers = [
  rest.get("*/api/users/me", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
