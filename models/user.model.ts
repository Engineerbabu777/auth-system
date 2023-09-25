


import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({

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