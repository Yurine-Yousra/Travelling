const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema(
  {
    userId : {
        type:String
    },
    userEmail :{
        type :String
    },
    tourName :{
        type:String,
        require:true
    },
    fullName :{
        type:String,
        require:true
    },
    questSize:{
        type:Number,
        require:true
    },
    phone :{
        type:String,
        require:true
    },
    bookAt :{
        type:Date,
        require:true
    }
    },
    { timestamps: true }
);
module.exports =  mongoose.model("Booking", bookingSchema);