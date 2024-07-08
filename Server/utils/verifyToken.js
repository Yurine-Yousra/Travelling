const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const VerifyToken = async (req, res, next) => {
    try {
        const {authorization} = req.headers
        const token = authorization.replace("Bearer ","")
        
        if (!token) {
            return res.status(401).json({ success: false, message: "Token not found" });
        }

        jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
            if (err) {
                return res.status(401).json({ success: false, message: "Failed to verify the token" });
            } else {
                const { id } = payload;
                const user = await User.findById(id);

                if (!user) {
                    return res.status(404).json({ success: false, message: "User not found" });
                }

                req.user = user;
                next();
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Failed to verify the token" });
    }
}

module.exports = VerifyToken;


const VerifyUser = (req,res,next) => {
    VerifyToken(req,res,next , () => {
        if(req.user._id === req.params.id || req.user.role === "admin"){
            next()
        }
        else{
            res.status(401).json('you are not authenticated')
        }
    })
}


const VerifyAdmin = (req,res,next) => {
    VerifyToken(req,res,next , () => {
        if( req.user.role === "admin"){
            next()
        }
        else{
            res.status(401).json('you are not authorized because you are not an admin')
        }
    })
}
module.exports = {
    VerifyToken,
    VerifyUser,
    VerifyAdmin
}