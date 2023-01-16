/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { StepsRequestProps } from "@/shared/interfaces/multi-step";
import { AuthSession } from "@/shared/interfaces/user";
import { connectDB } from "@/shared/lib/mongo";
import { apiUserInfoMultiStepSchema } from "@/shared/schemas/UserInfoMultiStep.schema";

type StepsRequestPropsWithUser = StepsRequestProps & {
  user: string;
};

const updateData = async (client: Db, data: StepsRequestPropsWithUser) => {
  const {
    bio,
    linkedin,
    seniority,
    skills,
    mobility_type,
    contract_type,
    user,
  } = data;

  await client.collection("user_info").updateOne(
    {
      user,
    },
    {
      $set: {
        mobility_type,
        contract_type,
        linkedin,
        seniority,
        skills,
        isPending: false,
      },
    }
  );

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

  return "";
};

const createData = async (client: Db, data: StepsRequestPropsWithUser) => {
  const {
    bio,
    linkedin,
    seniority,
    skills,
    mobility_type,
    contract_type,
    user,
  } = data;

  const hasInfo = await client
    .collection("user_info")
    .find({
      user,
    })
    .limit(1)
    .toArray();

  if (hasInfo.length) {
    throw new Error("Você já preencheu os seus dados.");
  }

  const userInfo = await client.collection("user_info").insertOne({
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

  return userInfo;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    const session = (await getSession({ req })) as unknown as AuthSession;
    const user = session?.login;

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    const reqData = req.body as StepsRequestPropsWithUser;

    const { bio, linkedin, seniority, skills, mobility_type, contract_type } =
      reqData;

    await apiUserInfoMultiStepSchema.parseAsync({
      bio,
      mobility_type,
      contract_type,
      linkedin,
      seniority,
      skills,
    });

    const client = await connectDB();

    if (req.method === "PUT") {
      const updateResponse = await updateData(client, reqData);
      return res.json({
        rows: updateResponse,
      });
    }

    if (req.method === "POST") {
      const updateResponse = await createData(client, reqData);
      return res.json({
        rows: updateResponse,
      });
    }
  } catch (e) {
    return res.status(400).json({
      message:
        "Ocorreu um erro ao tentar atualizar os seus dados. Tente novamente mais tarde.",
    });
  }
};
