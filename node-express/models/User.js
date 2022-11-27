import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const fields = {
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
};

const UserSchema = new Schema(fields, { timestamps: true });
// everytime the models performs save operation & the password is changed,
// it should save the hashed password
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 0);
  }

  next();
});

const User = mongoose.model('User', UserSchema);

export default User;
