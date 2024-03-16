const mongoose = require("mongoose")

const PeopleSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type:String,
      required: true
    },
    zip: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("people", PeopleSchema)