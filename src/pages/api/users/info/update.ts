/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { AuthSession, UpdateProfileData } from "@/shared/interfaces/user";
import { connectDB } from "@/shared/lib/mongo";
import { UpdateProfileSchema } from "@/shared/schemas/UpdateProfile.schema";

type StepsRequestPropsWithUser = UpdateProfileData & {
  user: string;
};

const updateData = async (client: Db, data: StepsRequestPropsWithUser) => {
  const {
    bio,
    linkedin,

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

  console.log(user);

  return "";
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

    const reqData = req.body as UpdateProfileData;

    const { bio, linkedin, mobility_type, contract_type } = reqData;

    const client = await connectDB();

    if (req.method === "PUT") {
      await UpdateProfileSchema.parseAsync({
        bio,
        mobility_type,
        contract_type,
        linkedin,
      });

      const updateResponse = await updateData(client, {
        ...reqData,
        user,
      });
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
