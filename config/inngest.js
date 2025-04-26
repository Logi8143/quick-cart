import {Inngest} from "inngest";
import connectDB from "./db";
 export const inngets = new Inngest({id:"quickcart-next"});

 export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-user-from-clerk'
    },
    {
        event:'clerk/user.created'
    },
    async({event}) => {
        const userData ={
            _id:id,
            email:email_addresses[0].email_address,
            name:first_name,
            imageUrl:image_url
        }
        await connectDB()
        await User.create(userData)
    }
 )


 //Inngest Function to update user data in database
export const syncUserUpdate = inngest.createFunction(
    {
        id:'update-user-from-clerk'
    },
    {event:'clerk/user.updated'},
    async({event})=>{
        const userData ={
            _id:id,
            email:email_addresses[0].email_address,
            name:first_name,
            imageUrl:image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)
    }
)

//inngest Function to delete user from database

export const syncUserDeletion = inngest.createFunction(
    {
        id:'delete-user-with-clerk'
    },
    {
        event:'clerk/user.deleted'
    },
    async({event}) => {
        const{id}=event.data

        await connectDB()
        await User.findByIdAndDelete(id)

    }
)