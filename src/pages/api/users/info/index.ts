/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { connectDB } from "@/shared/lib/mongo";
import { apiUserInfoMultiStepSchema } from "@/shared/schemas/UserInfoMultiStep.schema";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    const session = await getSession({ req });
    const user = session?.user?.name;

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    const client = await connectDB();

    const hasInfo = await client
      .collection("user_info")
      .find({
        user,
      })
      .limit(1)
      .toArray();

    if (hasInfo.length) {
      return res
        .status(400)
        .json({ message: "Você já preencheu os seus dados." });
    }

    const { bio, github, linkedin, seniority, skills } = req.body;

    await apiUserInfoMultiStepSchema.parseAsync({
      bio,
      github,
      linkedin,
      seniority,
      skills,
    });

    const data = await client.collection("user_info").insertOne({
      user,
      github,
      linkedin,
      seniority,
      skills,
    });

    await client.collection("users").updateOne(
      {
        user,
      },
      {
        $set: {
          bio,
        },
      }
    );

    return res.json({
      rows: data,
    });
  } catch (e) {
    return res.status(400).json({
      message:
        "Ocorreu um erro ao tentar atualizar os seus dados. Tente novamente mais tarde.",
    });
  }
};
