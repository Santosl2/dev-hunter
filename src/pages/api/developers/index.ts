/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";

import { connectDB } from "@/shared/lib/mongo";
import { developersSchema } from "@/shared/schemas/api/developers.schema";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    developersSchema.parse(req);

    const client = await connectDB();
    const { skills, seniorities } = req.query;

    const data = await client
      .collection("user_info")
      .find({
        skills: RegExp(skills as string),
        seniority: Number(seniorities),
      })
      .toArray();

    return res.json({
      rows: data,
    });
  } catch (e) {
    return res.status(500).json({
      message: e instanceof ZodError ? e.errors : "Internal server error",
    });
  }
};
