import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    verified: {
      type: Boolean,
      required: true
    }
  },
  {
    timestamp: true
  }
)

export const User = mongoose.model('User', userSchema)
