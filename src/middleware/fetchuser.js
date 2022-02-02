const jwt = require('jsonwebtoken');
const JWT_SECRET = "i#Notebook@"; //secret key for JWT

const fetchuser = (req, res, next) => {
    //Get the user from the jwt token and add id to req object
    try{
        const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: 'Please authenticate using a valid token'})
    }
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
    }catch(error){
        console.log(error.message)
        res.status(401).send({error: 'Please authenticate using a valid token'});
    }
}

module.exports = fetchuser;