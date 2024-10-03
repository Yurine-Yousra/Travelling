const User = require('../Models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

//function to create new user

const CreateNewUser = async(req , res) => {
    try{
    const {username , email , password } = req.body
    if(!username || !email || !password ) {
        res.status(500).json('Please Fill in All the required fields')
    }
    if(username && email && password){
        const emailFound = await User.findOne({email:email})
        if(emailFound){
            res.status(501).json("Please Chanege the Email adress this email exists already")
        }
        else{
        const HashedPassword = await bcryptjs.hash(password , 10)
        const NewUser = new User({
            email,
            username,
            password:HashedPassword,
        })
        await NewUser.save()
        res.status(200).json({succes:true , message:"User Created Succesfully"})
        }
    }
    }
    catch(err){
        console.log(err)
        res.status(500).json({succes:false , message:"We could not cretae an account for you"})
    }
}


const UpdateUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const { id } = req.params; // Correctly extract id from req.params

        const updatedUser = await User.findByIdAndUpdate(id, {
            username,
            email
        }, { new: true }); // Ensure { new: true } to return the updated document

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User updated successfully", data: updatedUser });
    } catch (err) {
        console.error("Error updating user:", err);
        res.status(500).json({ success: false, message: "Failed to update the user" });
    }
};




const DeleteUser = async(req , res) => {
    try{
        const id = req.params.id
        await User.findByIdAndDelete(id)
        res.status(200).json({succes: true , message : "User deleted Succesfully"})
    }
    catch(err){
        res.status(500).json({succes:false , messsage:"Failed to delete the user"})

    }
}


const GetUser = async(req , res) => {
    try{
        const id = req.params.id
        const TheUser = await User.findById(id)
        res.status(200).json({succes : true , message : "Succesfully found" , data : TheUser})
    }
    catch(err){
        console.log(err)
        res.status(500).json({succes : false , message : "Failed to find the tour"})
    }
}


const GetAllUsers = async(req , res) => {
    const page = parseInt(req.query.page)
    console.log(page)
    try{
        const AllUsers = await User.find({}).skip(page *8 ).limit(8)
        res.status(200).json({succes : true , message : "Succesfully all tours found" , data : AllUsers})
    }
    catch(err){
        console.log(err)
        res.status(500).json({succes : false , message : "Failed to load the tours"})

    }
}

 // Assuming User model is correctly imported

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: "You have to provide all fields"
            });
        }

        // Find user by email
        const user = await User.findOne({ email });
        
        // If user does not exist, return 404
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "This user does not exist"
            });
        }

        // Compare passwords
        const passwordMatch = await bcryptjs.compare(password, user.password);
        
        // If passwords match, generate JWT token
        if (passwordMatch) {
            const token = jwt.sign({
                id: user._id,
                email: user.email // Example: Include any additional information you need in the token
            }, process.env.JWT_SECRET, { expiresIn: '15d' }); // Example: Set token expiry time
            return res.status(200).json({succes:true,message:"succesfully login" ,data:{user , token}})
        } else {
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            });
        }
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


module.exports = {
    CreateNewUser,
    UpdateUser,
    DeleteUser,
    GetAllUsers,
    GetUser,
    Login
}