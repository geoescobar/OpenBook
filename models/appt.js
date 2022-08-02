const { Schema, model } = require("mongoose");

const apptSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      validate: [validateEmail, "Please fill a valid email address"],
    },
    phoneNumber: {
      type: Int,
      required: true,
      trim: true,
    }
});

const Appt = model("Appt", apptSchema);
module.exports = Appt;
