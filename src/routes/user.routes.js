const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.get);
router.post('/', userController.add);

module.exports = router;