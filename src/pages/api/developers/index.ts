/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";

import { connectDB } from "@/shared/lib/mongo";
import { developersSchema } from "@/shared/schemas/api/developers.schema";
import { delay } from "@/shared/utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  await delay(1200); // Simulate network latency

  try {
    developersSchema.parse(req);

    const client = await connectDB();
    const { skills, seniorities, contractTypes } = req.query;

    const regexContractType = contractTypes
      ? RegExp(contractTypes as string, "i")
      : /.*/;

    const data = await client
      .collection("user_info")
      .find({
        skills: RegExp(skills as string),
        seniority: Number(seniorities),
        contract_type: regexContractType,
      })
      .toArray();

    const formattedData = data.map(async (item) => {
      const { _id, user, ...items } = item;

      const userData = await client.collection("users").findOne({
        name: user,
      });

      return {
        ...items,
        ...userData,
      };
    });

    const rows = await Promise.all(formattedData);

    return res.json({
      rows,
    });
  } catch (e) {
    return res.status(500).json({
      message: e instanceof ZodError ? e.errors : "Internal server error",
    });
  }
};
