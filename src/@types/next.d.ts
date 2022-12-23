import { DefaultSession } from "next-auth";

declare module "next/server" {
  export interface NextRequest {
    user: DefaultSession.user;
  }
}

declare module "next" {
  export interface NextApiRequest {
    user: DefaultSession.user;
  }
}
