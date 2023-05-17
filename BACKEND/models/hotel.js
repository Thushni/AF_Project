const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
   hotelName : {
       type : String,
       required: true
   },
   hotelType : {
    type : String,
    required: true
   },
   location : {
       type : String,
       required: true
   },
   amount : {
       type : Number,
       required: true
   },
   noOfRoom : {
    type : Number,
    required: true
   },
   description : {
       type : String,
       required: true
   },
   image : {
    type : String,
    required: true
}
})

const Hotel = mongoose.model("Hotel",hotelSchema);

module.exports = Hotel;

/*module.exports = Hotel;*/

