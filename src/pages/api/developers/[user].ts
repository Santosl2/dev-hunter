/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";

import { connectDB } from "@/shared/lib/mongo";
import { getDeveloperSchema } from "@/shared/schemas/api/developers.schema";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    getDeveloperSchema.parse(req);

    const client = await connectDB();
    const { user } = req.query;

    const regUser = RegExp(user as string, "i");

    const data = await client.collection("user_info").findOne({
      user: regUser,
    });

    const userData = await client.collection("users").findOne({
      login: regUser,
    });

    return res.json({
      rows: {
        ...data,
        ...userData,
      },
    });
  } catch (e) {
    return res.status(500).json({
      message: e instanceof ZodError ? e.errors[0] : "Internal server error",
    });
  }
};
