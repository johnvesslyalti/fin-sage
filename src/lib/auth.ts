import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from "next-auth";
import { db } from "./db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return url
      if (url.startsWith(baseUrl)) return url
      return baseUrl + '/dashboard'
    }
  },
  session: {
    strategy: 'database',
  },
  pages: {
    signIn: '/auth/signin',
  }
}
