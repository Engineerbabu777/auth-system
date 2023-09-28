import { User } from "@/types/newUser";


const emailValidator = (email:String) => {
    // CHECK IF EMAIL HAS ONLY ONE @!
    if (email.indexOf("@") !== email.lastIndexOf("@") || !email.includes("@")) {
        throw new Error("Please enter a valid email!");
    }
    // CHECK FOR EMAIL HAS DOT!
    if (!email.includes(".")) {
        throw new Error("Please enter a valid email!");
    }

}

const numberValidator = (number: String) => {
    // CHECK IF NUMBER INCLUDES ANY OTHER CHARACTER THAN NUMBER!
    const isNumber = isNaN(parseInt(number as string));
    console.log(isNumber)
    if(isNumber) throw new Error("Please enter a valid number!");
}

const passwordValidator = (password: String) => { 
    // CHECK IF PASSWORD HAS MINIMUM OF 8 CHARACTERS!
    if (password.length < 8) 
        throw new Error("Please enter 8 digit password!");
}


export const userValidator = (user:any) => {
    // CHECK FOR EMPTY FIELD!
    if (!user.email || !user.password || !user.username || !user.number) {
        throw new Error("Please fill in all fields!");
    }
    
    // CHECK FOR EMAIL!
    emailValidator(user.email);
    // CHECK IF NUMBER INCLUDES ANY OTHER CHARACTER!
    numberValidator(user.number);
    // CHECK FOR PASSWORD LENGTH!
    passwordValidator(user.password);

    return true;
}