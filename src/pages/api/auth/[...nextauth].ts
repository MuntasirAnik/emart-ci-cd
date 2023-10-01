import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),

    CredentialProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials: any) {
        const user = {
          ...credentials
        }
        return user
      }
    }),
  ],
  secret: process.env.JWT_SECRET
});
