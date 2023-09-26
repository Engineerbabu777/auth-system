
import { newUserServerActionFunction } from "@/actions/registration";
import { User } from "@/types/newUser";
import { userValidator } from "@/utils/userValidator";



export default function useUser() {


    // CREATE USER!
    const createUser = async (user: User) => {
      
        try {
            // VALIDATE DATA!
            const result = userValidator(user);

            const data = {
                username: user.username,
                email: user.email,
                password: user.password,
                number: parseInt(user.number as string)
            }
           
            // CALL SERVER FUNCTION!
            if (result) {
                const response = await newUserServerActionFunction(data);
                console.log(response);
            }

        } catch (err: any) {
            console.log('SOME ERROR OCCUR-> ', err.message);
        }
      
    }

    // EDIT USER!

    // DELETE USERS!

    // GET USER!



    return {createUser};
}