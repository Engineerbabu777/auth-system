


import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { Session,User } from "next-auth";
import {JWT} from "next-auth/jwt";

const handler:AuthOptions = NextAuth({
    
    // PROVIDERS!
    providers: [],
    // SIGN PAGES!
    pages: {
        signIn: '/',
    },
    // SESSION!
    session: {
        strategy: 'jwt',
        maxAge: 30*4, // JUST 2 MINUTES!
    },
    secret: 'my_next_auth_secret_123',
    // CALLBACKS!
    callbacks:{
        session: async ({ session, token}: { session: Session, token: JWT, }) => {
            
            
            
            if (token && token.picture) {
                session.user.image = token.picture;
            }

            return session;
        },
        
    },
    // DATABASE ADAPTER!
    // adapter: MongoDBAdapter(),
});



export { handler as GET, handler as POST };
