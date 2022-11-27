import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
export const register = async (data) => {
  // find any user with same email id
  const isExists = await User.findOne({ email: data.email });
  if (isExists) {
    // if present respond with message: Email already exists
    throw new Error('Email already exists!');
  }
  // Else create the record
  const user = new User(data);
  await user.save();

  return user;
};

export const login = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error('User does not exists');
  }

  // hash the user sent password & compare with
  // the hashed password stored in the DB
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const payload = { userId: user._id };
  const token = await jwt.sign(payload, 'secret', {
    expiresIn: 3600,
  });
  return { token };
  // issue a token to indicate validity
  //   jwt -> json based web token
};
