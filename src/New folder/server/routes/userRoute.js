const express = require("express");
const { signup, login, verfiyToken, getUser, refreshToken, logout} = require("../controllers/user-controller");
const router = express.Router();

router.post('/signup',signup);
router.post('/adminlogin', login);
router.get('/user', verfiyToken, getUser);
router.get('/refresh', refreshToken,verfiyToken,getUser);
router.post('/logout',verfiyToken,logout);

module.exports  = router;