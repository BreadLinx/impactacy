import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "pages/api/auth/lib/mongodb";
import jwt from "jsonwebtoken";
import { NextAuthOptions } from "next-auth";

const { AUTH_TOKEN_KEY = "secret" } = process.env;

const makeObjectFromMongoDoc = (object: Record<string, any>) => {
  const newObject: Record<string, unknown> = {};
  for (const key in object) {
    const value = object[key];
    if (key === "_id") {
      newObject.id = value.toHexString();
    } else if (key === "userId") {
      newObject[key] = value.toHexString();
    } else {
      newObject[key] = value;
    }
  }
  return newObject;
};

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "impactacy",
  }),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.emailVerified = token.emailVerified;
        session.user.authToken = token.authToken;
      }

      return session;
    },
    async jwt({ token, user, account }: any) {
      const _db = (await clientPromise).db("impactacy");
      const usersCollection = _db.collection("users");
      const dbUser = await usersCollection.findOne({ email: token.email });
      const preparedUser = makeObjectFromMongoDoc(dbUser!);

      if (!preparedUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      if (user) {
        const authToken = jwt.sign(
          {
            _id: preparedUser.id,
          },
          AUTH_TOKEN_KEY,
          { expiresIn: "30d" },
        );

        return {
          id: preparedUser.id,
          name: preparedUser.name,
          email: preparedUser.email,
          picture: preparedUser.image,
          emailVerified: preparedUser.emailVerified,
          authToken,
        };
      }

      return {
        id: preparedUser.id,
        name: preparedUser.name,
        email: preparedUser.email,
        picture: preparedUser.image,
        emailVerified: preparedUser.emailVerified,
        authToken: token.authToken,
      };
    },
  },

  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        const response = await fetch("http://localhost:5000/signin", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ email, password }),
        });
        const user = await response.json();

        if (!user) {
          return null;
        }

        const userToReturn = {
          id: user.data._id,
          name: user.data.name,
          email: user.data.email,
          image: user.data.image,
          emailVerified: user.data.emailVerified,
        };

        return userToReturn;
      },
    }),
    GoogleProvider({
      id: "google",
      name: "Google",
      clientId:
        "531109080192-7tvmdujmjvj00u7e3dqviubdoq6gjon8.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
