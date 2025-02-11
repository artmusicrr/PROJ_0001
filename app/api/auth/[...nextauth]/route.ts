import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Para teste, usando credenciais fixas
        if (credentials?.email === "admin@example.com" && credentials?.password === "admin123") {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
          }
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt"
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };