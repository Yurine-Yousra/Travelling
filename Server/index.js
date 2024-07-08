const express = require('express')  ;
const dotenv= require('dotenv') ;
const mongoose  = require('mongoose')  ;
const cors  = require('cors') ;
const cookieParser= require('cookie-parser') ;
const router = require('./routes/tour') ;
const userroutes = require('./routes/user')
const reviewroutes = require('./routes/review')
const bookingroutes = require('./routes/booking')
 // Adjust the path based on the actual location of your router file

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin :true,
    credentials:true
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/tours' , router); // Using the router middleware
app.use('/users' , userroutes);
app.use('/reviews' , reviewroutes)
app.use('/booking' , bookingroutes)

// Database Connection
mongoose.set("strictQuery" , false)
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.URL)
        console.log('Connected to the database of travels');
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1); // Exit the process on connection failure
    }
};

// Default Route
app.get('/', (req, res) => {
    res.send('API is working');
});

// Start the server
app.listen(port, () => {
    connectToDatabase();
    console.log(`Server is listening on port ${port}`);
}
)