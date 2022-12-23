/* eslint-disable camelcase */
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { connectDB } from "@/shared/lib/mongo";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      const { login, bio, location, name, avatar_url } = profile as any;

      const userAlreadyExists = await collectionUsers.findOne({
        login,
      });

      if (!userAlreadyExists) {
        await collectionUsers.insertOne({
          login,
          bio,
          location,
          name,
          avatar_url,
          created_at: new Date(),
        });
      }

      return true;
    },
    async session({ session }) {
      const client = await connectDB();
      const collectionUsers = client.collection("users");

      const { user } = session;

      if (user) {
        const userMongo = await collectionUsers.findOne({ login: user.name });

        return {
          ...session,
          ...userMongo,
        };
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);