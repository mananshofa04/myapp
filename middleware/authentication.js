const jwt = require('jsonwebtoken')
const model = require('../models/index')
const users = model.users 

exports.userAuth = async (req, res, next) => {
    if(!req.headers['access-token']){
        // return response(res,false,'Unauthorized',{},400)
        res.status(400).json({
             'status': false,
             'messages': 'Unauthorized',
             'data': {},
        })
    }
    jwt.verify(req.headers['access-token'], process.env.USER_SECRET, (err, decode) => {
        if(err) {
            // return response(res,false,'Unauthorized',{},400)
            res.status(400).json({
             'status': false,
             'messages': 'Unauthorized',
             'data': {},
        })
        }
        req.body.users = decode 
        console.log(decode);
        next()
    })
}
 