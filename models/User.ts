import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    dob: {
      month: String,
      day: String,
      year: String,
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true }
);

export default models.User || mongoose.model("User", UserSchema);
