const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingHOTELSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    ro: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fdate: {
        type: Date,
        required: true
    },
    ldate: {
        type: Date,
        required: true
    }
})

const BookingHOTEL = mongoose.model("BookingHOTEL", bookingHOTELSchema);

module.exports = BookingHOTEL;