import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const fields = {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}

const userSchema = new Schema(fields, { timestamps:true} )
const User = mongoose.model("User", userSchema)

export default User;