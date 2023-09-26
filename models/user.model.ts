


import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    imageUrl: {
        default: null,
        type: String,
    },
    number: {
        type: Number,
        required: true,
    },


    // USERNAME!
    // EMAIL!
    // JOB POSITION!
    // DATE OF BIRTH!
    // TELEPHONE!
    // NAME!
    // IMAGE!
    // PASSWORD!

});


export const userModel =  mongoose.models.user || mongoose.model('user', userSchema);