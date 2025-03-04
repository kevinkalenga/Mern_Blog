import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://tse1.mm.bing.net/th?id=OIP.S2p9jcb_a9MFqHLHg9L0UAHaHa&pid=Api&P=0&h=180",
    },
    isAdmin: {
        type:Boolean,
        default: false,
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User;