import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { AuthOptions, Session } from "next-auth";
import clientPromise from "./mongoose";
import { JWT } from "next-auth/jwt";
import { userModel } from "@/models/user.model";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";



export const authOptions: AuthOptions = {
    // PROVIDERS!
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "jsmith@gmail.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // console.log("credentials: ", credentials);

                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }

                // FIND USER!
                const user = userModel.findOne({ email: credentials.email });

                if (!user) {
                    console.log("user not found!");
                    return null;
                }

                // MATCH THE PASSWORDS!

                return user;
            },
        }),
    ],
    // SIGN PAGES!
    pages: {
        signIn: "/login",
    },
    // SESSION!
    session: {
        strategy: "jwt",
        maxAge: 30 * 4, // JUST 2 MINUTES!
    },
    secret: "my_next_auth_secret_123",
    // CALLBACKS!
    callbacks: {
        session: async ({ session, token }: { session: Session; token: JWT }) => {
            if (token.sub) {
                session.user.id = token.sub;
                // session.user.imageUrl = token.imageUrl as String;
                // session.user.password = token.password as String;
                // session.user.email = token.email as String;
                // session.user.username = token.username as String;
            }

            return session;
        },
        
        // jwt: async ({ token, user }: { token: JWT; user: User }) => {
        // 	if (user) {
        // 		const u = user as unknown as any;
        // 		return {
        // 			...token,
        // 			id: u.id,
        // 			imageUrl: u.imageUrl,
        // 			username: u.username,
        // 			password: u.password,
        // 			email: u.email,
        // 		};
        // 	}
        // 	return token;
        // },
    },
    // DATABASE ADAPTER!
    adapter: MongoDBAdapter(clientPromise),
}