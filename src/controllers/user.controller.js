const User = require('../models/user.model');

const userController = {
    get: async(req, res, next)=> {
        try {
            const data = await User.findAndCountAll();
            res.status(200).send(data);
        } catch (error) {
            next(error);
        }
    },
    add: async(req, res, next)=> {
        try {
            const findUser = await User.findAll({where: {
                email: req.body.email
            }});
            if(findUser.length > 0 ) {
                res.status(200).send({status: false, message: 'User already exists'});
            } else {
                const result = await User.create(req.body);
                res.status(200).send({status: true, message: 'User registered successfully', data: result});
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = userController;