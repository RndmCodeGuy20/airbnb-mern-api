import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  cleanliness: { type: Number },
  comfort: { type: Number },
  location: { type: Number },
  facilities: { type: Number },
  communication: { type: Number },
  value_for_money: { type: Number },
});

const TVSchema = new mongoose.Schema({
  kind: { type: String },
  number_of_channels: { type: Number },
});

const commentSchema = new mongoose.Schema({
  name: { type: String },
  date: { type: Date, default: Date.now },
  comment: { type: String },
});

const locationSchema = new mongoose.Schema({
  lat: { type: Number },
  long: { type: Number },
});

const amenitiesSchema = new mongoose.Schema({
  wifi: { type: Boolean },
  pool: { type: Boolean },
  balcony: { type: Boolean },
  kitchen: { type: Boolean },
  air_conditioning: { type: Boolean },
  parking: { type: Boolean },
  TV: TVSchema,
});

const descriptionSchema = new mongoose.Schema({
  number_of_rooms: { type: Number },
  beds: { type: Number },
  number_of_guests: { type: Number },
  number_of_beds: { type: Number },
});

const addressSchema = new mongoose.Schema({
  road: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
});

const hotelSchema = new mongoose.Schema({
  name: { type: String },
  address: addressSchema,
  city: { type: String },
  country: { type: String },
  price_per_night: { type: Number },
  photo: [{ type: String }],
  liked: { type: Boolean },
  star_rating: { type: Number },
  tag: { type: String },
  description: descriptionSchema,
  amenities: amenitiesSchema,
  reviews: {
    number_of_reviews: { type: Number },
    standards: reviewSchema,
  },
  comments: [commentSchema],
  location: locationSchema,
});

module.exports = mongoose.model('hotel', hotelSchema);
