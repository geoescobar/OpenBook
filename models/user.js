const { Schema, model } = require("mongoose");
const dayjs = require("dayjs")
const formatDate = (date) => {
    return dayjs(date).format("M/D/YYYY")
}
const formatTime = (date) => {
    return dayjs(date).format("h:mm a")
}
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
  },
  dateCreated: {
    type: Date,
    default: new Date(),
    get: formatDate,
  },
  dateSelected: {
    type: Date,
    required: true,
    get: formatDate,
  },
  timeSelected: {
    type: Date,
    required: true,
    get: formatTime,
  },
  status: {
    type: Boolean,
    required: true,
  }
});
const Appt = model("Appt", apptSchema);
module.exports = Appt;








