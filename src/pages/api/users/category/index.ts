/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";

import { connectDB } from "@/shared/lib/mongo";
import { categorySchema } from "@/shared/schemas/api/Category.schema";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    categorySchema.parse(req);

    const regex = RegExp(`${req.query.category}`);

    const client = await connectDB();
    const returnData = await client.collection("user_info").count({
      categories: regex,
    });

    return res.json({
      rows: returnData,
    });
  } catch (e) {
    const { issues } = e as ZodError;

    return res.status(400).json({
      message: issues[0].message,
    });
  }
};
