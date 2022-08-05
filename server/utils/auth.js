const { User } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {

        const admin = await User.findOne({
            email: req.body.email
        })
        if (!admin) return res.send('User not found')

        const isPassword = await bcrypt.compare(req.body.password, admin.password)
        if (!isPassword) return res.send('Wrong email or password')
        console.log(process.env.JWT)
        const token = jwt.sign({ id: admin._id, password: admin.password }, process.env.JWT)

        const { password, ...otherInfo } = admin._doc;
        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json(otherInfo)
        console.log(res.cookie)

    } catch (error) {
        console.log(error)
        res.status(403).json({ message: 'I\'m a little teapot.' })
    }
}


const logout = async (req, res) => {
    try {
        res.clearCookie('access_token');
        res.status(200).send('Success')
    } catch (error) {
        res.status(403).json(error);
    }
}

const verifyToken = async (req, res, next) => {
    const token = req.cookie.access_token
    console.log(req.cookie)
    if (!token) {
        res.status(404).json({ message: 'You are not authorized.' })
    }
    jwt.verify(token, process.env.JWT, {
        expiresIn: '1h'
    }, (error, admin) => {
        if (error) {
            res.status(404).json({ message: 'Expired token.' })
        }
        req.user = admin
    })
}

// MAY USE THIS TO VERIFY IF A USER WANTS TO VIEW THEIR APPOINTMENT.  DON'T NEED THIS YET.
const verifyUser = async (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.admin._id === req.params.id) {
                next();
            } else {
                res.status(404).json({ message: 'Please Sign In' })
            }
        })
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
    }
}


module.exports = { login, logout, verifyToken, verifyUser };

// export const register = async (req, res, next) => {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const { firstName, lastName, businessName, email, password, city, state, phoneNumber } = req.body

//     try {
//         const newAdmin = new Admin({
//             firstName,
//             lastName,
//             businessName,
//             email,
//             password: hash,
//             city,
//             state,
//             phoneNumber
//         })

//         await newAdmin.save()
//         res.status(200).send(
//             "Admin has been created."
//         )
//     } catch (error) {
//         // change to next() once MW is done.
//     }
// }