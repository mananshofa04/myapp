const express = require('express'); 
const model = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   
const users = model.users;
const optionsJwt = {
	algorithm : 'HS256'
}
module.exports = { 
	signin(req, res) { 
		const datauser = users.findOne({
			where: {
				id: req.body.id
			}
		}).then(async (datauser) => { 
			if (!datauser) {
				return res.status(404).send({
					auth: false,
					id: req.body.id,
					accessToken: null,
					message: "Error",
					errors: "User Not Found."
				});
			}

			var passwordIsValid = await bcrypt.compareSync(req.body.password, datauser.password);
			if (!passwordIsValid) {
				return res.status(401).send({
					auth: false,
					id: req.body.id,
					accessToken: null,
					message: "Error",
					errors: "Invalid Password!"
				});
			}

			// var token = await 'Bearer ' + jwt.sign({
			// 	id: datauser.id
			// }, config.secret, {
			// 	expiresIn: 86400 //24h expired
			// });

			var token = await jwt.sign({
				id: datauser.id
			}, process.env.USER_SECRET, optionsJwt);

			// var token = await jwt.sign(datauser.dataValues, process.env.USER_SECRET,optionsJwt);

			res.status(200).send({
				auth: true,
				id: req.body.id,
				accessToken: token,
				message: "ok",
				errors: null
			});
		}).catch(err => {
			res.status(500).send({
				auth: false,
				id: req.body.id,
				accessToken: null,
				message: "Error",
				errors: err
			});
		});
	}
}