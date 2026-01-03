import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/app/lib/dbConnect";
import UserModel from "@/app/model/UserModel";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
  const { email, password } = credentials;

  await dbConnect();
  const admin = await UserModel.findOne({ email });

  if (!admin) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const passwordMatch = await bcrypt.compare(password, admin.password);

  if (!passwordMatch) {
    throw new Error("INVALID_CREDENTIALS");
  }

  if (admin.usertype !== "2") {
    throw new Error("NOT_ADMIN");
  }

  return {
    id: admin._id,
    email: admin.email,
    name: admin.name,
    usertype: admin.usertype,
  };
}

    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.usertype = user.usertype;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.usertype = token.usertype;
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
