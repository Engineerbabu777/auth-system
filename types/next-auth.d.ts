
import { ObjectId } from "mongoose";
import NextAuth,{DefaultSession} from "next-auth";



declare module 'next-auth' {

    interface Session extends DefaultSession {
        user: {
            id: String,
            number: Number,
            password:String,
            username: String,
            email: String,
            imageUrl: String,
        }
    }
    
    interface User {
        
    }
}