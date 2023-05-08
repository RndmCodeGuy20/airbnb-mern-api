import mongoose from 'mongoose';

const addressSchema = mongoose.Schema({
  street: {
    type: String,
    required: [true, 'street is required'],
  },
  city: {
    type: String,
    required: [true, 'city is required'],
  },
  state: {
    type: String,
    required: [true, 'state is required'],
  },
});


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
  address: addressSchema,
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
  created_at: {
    type: Date,
    default: Date.now,

  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export { User };
