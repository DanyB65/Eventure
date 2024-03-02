import NextAuth from "next-auth";

import CredentialsProviders from "next-auth/providers/credentials";
import { sign } from "crypto";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // providers: [
    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    //   })
  ],
};

export default NextAuth(authOptions);
