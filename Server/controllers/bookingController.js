const Booking = require('../Models/Booking')

const CreateBooking = async(req , res) => {
    const newBooking = new Booking(req.body)
    
    try{
        const SavedBooking = await newBooking.save()
        res.status(200).json({success:true,message:"Booking Added" , data:SavedBooking})
    }
    catch(err){
        console.log(err)
        res.status(500).json({success:true,message:"Booking Added" })
    }
}

const GetBooking = async(req , res) => {
    try{
        const id = req.params.id
        const TheBooking = await Booking.findById(id)
        res.status(200).json({succes : true , message : "Succesfully found" , data : TheBooking})
    }
    catch(err){
        console.log(err)
        res.status(500).json({succes : false , message : "Failed to find the tour"})
    }
}


const GetAllBookings = async(req , res) => {
    try{
        const AllBookings = await Booking.find({})
        res.status(200).json({succes : true , message : "Succesfully all tours found" , data : AllBookings})
    }
    catch(err){
        console.log(err)
        res.status(500).json({succes : false , message : "Failed to load the tours"})

    }
}

module.exports = {
    CreateBooking,
    GetBooking,
    GetAllBookings
} 