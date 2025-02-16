 
import JWT, { JwtPayload } from "jsonwebtoken";

const adminAuth = async (req , res , next ) => {
    try {
        const token = req.headers.authorization   
        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
        }

        const token_decode = JWT.verify(token, process.env.JWT_SECRET  )  

        if (!token_decode || token_decode.email !== process.env.ADMIN_EMAIL || token_decode.role !== "admin") {
            return res.status(403).json({ success: false, message: "Not Authorized. Login Again" });
        }

        next();  
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export default adminAuth;
