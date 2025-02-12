import { NextAuthOptions } from "next-auth";
import { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

// Extend the default User type to include id
declare module "next-auth" {
  interface User {
    id: string;
  }
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           console.log("Attempting login with:", {
//             email: credentials?.email,
//             passwordProvided: !!credentials?.password,
//           });

//           // Para teste, usando credenciais fixas
//           if (
//             credentials?.email === "admin@example.com" &&
//             credentials?.password === "admin123"
//           ) {
//             return {
//               id: "1",
//               name: "Admin User",
//               email: "admin@example.com",
//             };
//           }
//           console.warn("Login attempt failed");
//           return null;
//         } catch (error) {
//           console.error("Authorization error:", error);
//           return null;
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   jwt: {
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//       }
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

//const handler = NextAuth(authOptions);
//export { handler as GET, handler as POST };
