// import NextAuth from "next-auth";

// import CredentialsProviders from "next-auth/providers/credentials";
// import { sign } from "crypto";
// import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple";
// import credentials from "next-auth/providers/credentials";
// export const authOptions = {
//   // Configure one or more authentication providers
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     credentials({
//       id: "credentials",
//       name: "credentials",
//       credentials: {
//         email: {
//           label: "email",
//           type: "text",
//           placeholder: "jsmith@gmail.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         console.log(credentials)
//         if (!credentials) return null;
//         return {
//           email: credentials.email, id:Date.now().toString()
//         };
//       },
//     }),
//     // providers: [
//     //   AppleProvider({
//     //     clientId: process.env.APPLE_ID,
//     //     clientSecret: process.env.APPLE_SECRET
//     //   })
//   ],
// };

// export default NextAuth(authOptions);
import NextAuth from "next-auth";

import CredentialsProviders from "next-auth/providers/credentials";
import { sign } from "crypto";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import credentials from "next-auth/providers/credentials";
export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    credentials({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log(credentials)
        if (!credentials) return null;
        return {
          email: credentials.email, id:Date.now().toString()
        };
      },
    }),
    // providers: [
    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    //   })
  ],
};

export default NextAuth(authOptions);
