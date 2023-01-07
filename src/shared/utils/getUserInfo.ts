import { connectDB } from "../lib/mongo";

export async function getUserInfo(user: string) {
  const client = await connectDB();

  const returnData = await client.collection("user_info").findOne({
    user,
  });

  return returnData;
}
