/* eslint-disable camelcase */
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
    const user = session?.login;

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

    const { bio, linkedin, seniority, skills, mobility_type, contract_type } =
      req.body;

    await apiUserInfoMultiStepSchema.parseAsync({
      bio,
      mobility_type,
      contract_type,
      linkedin,
      seniority,
      skills,
    });

    const data = await client.collection("user_info").insertOne({
      user,
      mobility_type,
      contract_type,
      linkedin,
      seniority,
      skills,
      isPending: false,
    });

    await client.collection("users").updateOne(
      {
        login: user,
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
    console.log(e);
    return res.status(400).json({
      message:
        "Ocorreu um erro ao tentar atualizar os seus dados. Tente novamente mais tarde.",
    });
  }
};
