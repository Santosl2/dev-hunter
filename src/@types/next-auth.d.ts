declare module "next-auth/react" {
  export interface Session extends DefaultSession {
    login: string;
  }
}
