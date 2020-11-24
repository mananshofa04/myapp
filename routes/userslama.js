
const express = require('express');
const router = express.Router();
const model = require('../models/index');// GET users listing. 
router.post('/', async function (req, res, next) {
  try {
    const {
      email,
      password,
      name,
      telephone,
      address
    } = req.body;
    const users = await model.users.create({ 
      email,
      password,
      name,
      telephone,
      address
    });
  if (users) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'User berhasil ditambahkan',
      'data': users,
    })
  }
 } catch (err) {
   res.status(400).json({
     'status': 'ERROR',
     'messages': err.message,
     'data': {},
   })
 }
});
// UPDATE users
router.patch('/:id', async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const {
      name,
      email,
      gender,
      phoneNumber
    } = req.body;
    const users = await model.users.update({
      name,
      email,
      gender,
      phone_number: phoneNumber
    }, {
      where: {
        id: usersId
      }
    });
    if (users) {
      res.json({
        'status': 'OK',
        'messages': 'User berhasil diupdate',
        'data': users,
      })
    }
  } catch (err) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': err.message,
      'data': {},
    })
  }
});
// DELETE users
// router.delete('/:id', function(req, res){
//   const id = req.params.id;

//   	model.users.findOne({ where: {
//       id: id
//     }}).then(
//     	async (users) => {
//     		if (users) {
//     			const hapus = await users.destroy();
//     			if (hapus) {
//     				res.send({
// 			          message: "User berhasil dihapus"
// 			        });
//     			}else{
//     				res.send({
// 			          message: "User gagal dihapus"
// 			        });
//     			} 
//     		}else{
//     			res.send({
// 		          message: "User tidak ditemukann"
// 		        });
//     		}
//     	}
//     )
// }); 

// router.delete('/:id', function(req, res) => {
//     const usersId = req.params.id;
//     model.destroy({
//         where: { id: usersId }
//     }).then(
//         (data) => {
//         	res.send({
// 	          message: "User berhasil dihapus"
// 	        });
//         }
//     ).catch(
//         (e) => {
//         	res.send({
// 	          message: err.messages,
// 	        });
//         }
//     ) 
// }); 
router.delete('/:id', async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const users = await model.users.destroy({ where: {
      id: usersId
    }})

    if (users) {
      res.json({
        'status': 'OK',
        'messages': 'User berhasil dihapus',
        'data': users,
      })
    }
  } catch (err) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': err.message,
      'data': {},
    })
  }
});
/* GET users listing. */ 
router.get('/', async function (req, res, next) {
  try {
    const users = await model.users.findAll({});
    if (users.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': users
      })
    } else {
      res.json({
        'status': 'ERROR',
        'messages': 'EMPTY',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'status': 'ERROR',
      'messages': err.messages,
      'data': {}
    })
  }
});

module.exports = router;
