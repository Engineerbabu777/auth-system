
import { ObjectId } from "mongoose";
import NextAuth,{DefaultSession} from "next-auth";



declare module 'next-auth' {

    interface Session extends DefaultSession {
        user: {
            id: String,
            email: String,
            name: String,
            image: String,
        }        
    }
    
    interface User {
        
    }
}