import mongoose from 'mongoose';


// eslint-disable-next-line new-cap
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'name is required'],
  },
  lastName: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
});

const User = mongoose.model('User', userSchema);

export { User };
