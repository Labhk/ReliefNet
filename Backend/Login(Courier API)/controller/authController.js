const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/userModel');
const Supply = require('../model/supplyModel')

const sendOTP = require('../services/sendOTP')
const sendRequest = require('../services/sendRequest')
const Join = require('../services/join')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());

//Get All Users
router.get('/users',(req,res) => {
    User.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//register users
router.post('/login', (req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return res.send({auth:false,token:'Error While Logging'});
        if(!user){
            //encrypt password
            let hashPassword = bcrypt.hashSync(req.body.password, 8);
            //8 length of password
            User.create({
                email: req.body.email,
                password: hashPassword,
                role:req.body.role?req.body.role:'User',
            },(err,data) => {
                if(err) return res.send('Error While Register')
                res.send({auth:'verify',token:'Registeration Successful'})
        })
        }
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password);
            if(!passIsValid) return res.send({auth:false,token:'Invalid Password'})
            // in case both match 
            let token = jwt.sign({id:user._id},config.secret,{expiresIn:86400}) //24 hours
            res.send({auth:'',token:token})
        }
    })
    
})

//send OTP
router.post('/otp',(req,res) => {
    const otp = Math.floor(1000 + Math.random() * 9000)
    const requestId = sendOTP(otp,req.body.email);
    res.send({verify: otp});

})

//send Request
router.post('/sendreq',(req,res) => {
    const requestId = sendRequest(req.body.content,req.body.email,req.body.useremail);
    res.send({email_res: requestId});

})

//send Request
router.post('/join',(req,res) => {
    const requestId = Join(req.body.email);
    res.send({email_res: requestId});

})


//userInfo
router.get('/userInfo',(req,res) => {
    let token = req.headers['x-access-token'];
    if(!token) res.send({auth:false,token:'No Token Provided'})
    // jwt verify
    jwt.verify(token,config.secret,(err,user) => {
        if(err) return res.send({auth:false,token:'Invalid Token'})
        User.findById(user.id,(err,result) =>{
            res.send(result)
        })
    })
})

//delete user
router.delete('/delete',(req,res) =>{
    User.remove({},(err,data) => {
        if(err) throw err;
        res.send("User Deleted")
    })
})


//Get All Suppliers
router.get('/all',(req,res) => {
    Supply.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})




module.exports = router;
