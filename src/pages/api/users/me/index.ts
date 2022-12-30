/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { connectDB } from "@/shared/lib/mongo";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });
    const user = session?.user?.name;

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    const client = await connectDB();
    const returnData = await client.collection("user_info").findOne({
      user,
    });

    return res.json(returnData);
  } catch (e) {
    return res.status(500).send("Internal Server Error");
  }
};
