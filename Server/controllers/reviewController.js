const Tour = require('../Models/Tour')
const Review = require('../Models/Reviw')
const CreateReview = async(req , res) => {
    const tourId = req.params.tourid; // Note the lowercase 'tourid'

            try{
                const newReview = new Review(req.body); // Use req.body directly
        console.log(tourId)
        const SavedReview = await newReview.save()
        //save the review in the array review of the tour
        await Tour.findByIdAndUpdate(tourId , {$push : {reviews : SavedReview._id}})
        res.status(200).json({succes:true , message:"Review Added succesfully" , data :SavedReview})
        }
        catch(err){
            console.log(err)
            res.status(500).json({succes:false,message:"Filed to add the review to this tour"})
        }
}

const GetRewiews = async(req,res) => {
    try {
        const rewiews = await Review.find({}).limit(8)
        res.status(200).json({succes:true,message:"reviws loaded succesfully" , data:rewiews})
    }
    catch(err){
        res.status(500).json({succes:false,message:"failed to load the reviws"})
    }
}

module.exports = {
    CreateReview,
    GetRewiews}