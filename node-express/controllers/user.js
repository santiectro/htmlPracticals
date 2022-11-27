import User from "../models/User";

// CRUD

export const createUser = async (data) => {
    const user = new User(data)
    await user.save();
    return user
}

export const getUser = async () => {
    const userResults = await User.find()
    return userResults
}