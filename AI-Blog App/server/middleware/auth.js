import jwt from 'jsonwebtoken';


let auth = (req, res, next)=>{
    const token = req.headers.authorization;

try {
    jwt.verify(token, process.env.JWT_SECRET)
    next();
} catch (error) {
    res.json({success: false, message: "Invalid token"})
}

}


export default auth;









