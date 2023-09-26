


import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { Session,User } from "next-auth";
import {JWT} from "next-auth/jwt";
import clientPromise from "@/lib/mongoose";
import { userModel } from "@/models/user.model";

const handler:AuthOptions = NextAuth({
    
    // PROVIDERS!
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }
                
                // FIND USER!
                const user = userModel.findOne({ email: credentials.email });

                if (!user) {
                    console.log('user not found!')
                    return null;
                }

                return user;
            }
        })
    ],
    // SIGN PAGES!
    pages: {
        signIn: '/login',
    },
    // SESSION!
    session: {
        strategy: 'jwt',
        maxAge: 30*4, // JUST 2 MINUTES!
    },
    secret: 'my_next_auth_secret_123',
    // CALLBACKS!
    callbacks:{
        session: async ({ session, token}: { session: Session, token: JWT}) => {
            
            if (token.sub) {
                session.user.id = token.sub;
                session.user.imageUrl = token.imageUrl as String;
                session.user.password = token.password as String;
                session.user.email = token.email as String;
                session.user.username = token.username as String;
            }

            return session;
        },
        jwt: async ({ token, user, }:{token: JWT, user: User}) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    imageUrl: u.imageUrl,
                    username: u.username,
                    password: u.password,
                    email: u.email,
                }
            }
            return token;
        }
    },
    // DATABASE ADAPTER!
    adapter: MongoDBAdapter(clientPromise),
});



export { handler as GET, handler as POST };
