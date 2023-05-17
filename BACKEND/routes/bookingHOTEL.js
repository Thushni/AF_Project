const router = require("express").Router();
let BookingHOTEL = require("../models/bookingHOTEL");

router.route("/bookHOTEL").post((req,res)=>{

    const fName = req.body.fName;
    const lName = req.body.lName;
    const room = req.body.room;
    const ro = req.body.ro;
    const contactNo = Number(req.body.contactNo);
    const email = req.body.email;
    const fdate = req.body.fdate;
    const ldate = req.body.ldate;

    const newBookingHOTEL = new BookingHOTEL({
      fName,
      lName,
      room,
      ro,
      contactNo,
      email,  
      fdate,
      ldate   
    })

    newBookingHOTEL.save().then(()=>{
        res.json("Booking Added") 
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    BookingHOTEL.find().then((bookingsHOTEL)=>{
        res.json(bookingsHOTEL)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;

    await BookingHOTEL.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "booking deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userID = req.params.id;

    const user = await BookingHOTEL.findById(userID)
    .then((bookingHOTEL) => {
        res.status(200).send({status: "Booking fetched",bookingHOTEL});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche booking", error: err.message});
    })
})

module.exports = router;
