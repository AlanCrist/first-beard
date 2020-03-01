require("dotenv/config");

export default {
    address_acess: process.env.ACCESS_ADDRESS,
    secret: process.env.SECRET,
    expiresIn: process.env.EXPIRES_IN
};
