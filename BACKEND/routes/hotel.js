const router = require("express").Router();
let Hotel = require("../models/hotel");

router.route("/addHOTEL").post((req,res)=>{

    const hotelName = req.body.hotelName;
    const hotelType = req.body.hotelType;
    const location = req.body.location;
    const amount = Number(req.body.amount);
    const noOfRoom = Number(req.body.noOfRoom);
    const description = req.body.description;
    const image = req.body.image;

    const newHotel = new Hotel({
      hotelName,
      hotelType,
      location,
      amount,
      noOfRoom,
      description,
      image
    })

    newHotel.save().then(()=>{
        res.json("Hotel Added") 
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Hotel.find().then((hotels)=>{
        res.json(hotels)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/updateHOTEL/:id").put(async (req,res)=>{
    let userID = req.params.id;
    const {hotelName,hotelType,location,amount,noOfRoom,description,image}= req.body;

    const updateHotel = {

      hotelName,
      hotelType,
      location,
      amount,
      noOfRoom,
      description,
      image 
    }
    const update = await Hotel.findByIdAndUpdate(userID, updateHotel)
    .then(()=>{
        res.status(200).send({status:"Hotel updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data" , error: err.message});
         
    })
        
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;

    await Hotel.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "Hotel deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userID = req.params.id;

    const user = await Hotel.findById(userID)
    .then((hotel) => {
        res.status(200).send({status: "Hotel fetched",hotel});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche hotel", error: err.message});
    })
})

module.exports = router;
