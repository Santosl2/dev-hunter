/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { connectDB } from "@/shared/lib/mongo";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });

    if (!session?.user) {
      return res.status(401).send("Unauthorized");
    }

    const client = await connectDB();
    const returnData = await client
      .collection("users")
      .find({
        name: session.user.name,
      })
      .limit(10)
      .toArray();

    return res.json(returnData[0]);
  } catch (e) {
    console.error(e);
  }
};
