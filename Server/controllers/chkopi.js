const Tour = require('../Models/Tour')

 const CreateTour = async(req , res) => {
        const newTour = new Tour(req.body)

        try{
            const savedTour = await newTour.save()
            res.status(200).json({succes:true , message:'Succesfully created' , data : savedTour})
        }
        catch(err){
            res.status(500).json({succes:false,message:'Fialed to create'})
            console.log(err)
        }
}

const UpdateTour = async(req , res) => {
    try{
        const id = req.params.id
        const UpdatedTour = await Tour.findByIdAndUpdate(id , {$set: req.body} , {new : true})
        res.status(200).json({succes : true , message : 'Succesfully updated' , data :UpdatedTour})
    }
    catch(err){
        console.log(err)
        res.status(500).json({succes:false,message:'Fialed to create'})

    }
}

const DeleteTour = async(req , res) => {
    try{
        const id = req.params.id
        await Tour.findByIdAndDelete(id)
        res.status(200).json({succes : true , message:"Succesfully deleted"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({succes : false , message:"Failed to delete the tour"})
    }
}

const GetSingleTour = async(req , res) => {
    try{
        const {id} = req.params
        const TheTour = await Tour.findById(id).populate('reviews')
        res.status(200).json({succes : true , message : "Succesfully found" , data : TheTour})
    }
    catch(err){
        res.status(500).json({succes : false , message : "Failed to find the tour"})
    }
}

const GetAllTours = async(req , res) => {
    const page = parseInt(req.query.page)
    //console.log(page)
    try{
        const AllTours = await Tour.find({}).populate('reviews') .skip(page *8 ).limit(8)
        res.status(200).json({succes : true , message : "Succesfully all tours found" , data : AllTours})
    }
    catch(err){
        res.status(500).json({succes : false , message : "Failed to load the tours"})

    }
}


const GetTourBySearch = async(req , res) => {
    const city = new RegExp(req.query.city , 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try{
        const tours = await Tour.find({city , distance :{$gte:distance} , maxGroupSize :{$gte:maxGroupSize} }).populate('reviews')
        res.status(200).json({succes : true , message : "Succesfully all tours found" , data : tours})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({succes : false , message : "Failed to load the tours"})
    }
}


const getTourCount = async(req , res) => {
    try{
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({succes : true , data : tourCount})
    }
    catch(err){
        console.log(err)
        res.status(500).json({succes:false , message:"Failed to fetch the TourCount"})
    }
}

const FeaturedTours = async(req , res) => {     
    try {
        const tours = await Tour.find({hello : true}).populate('reviews').limit(12)
        res.status(200).json({succes:true , messgae : "featured tours fetched succesfully" , data : tours})
    }
    catch(err){
        console.log(err)
        res.status(500).json({succes:false,messgae :"we could not load the featured tours"})
        }
}
module.exports = {
    CreateTour,
    UpdateTour,
    DeleteTour,
    GetSingleTour,
    GetAllTours,
    GetTourBySearch,
    getTourCount,
    FeaturedTours
}