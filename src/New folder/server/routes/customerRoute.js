const express = require("express");
const router = express.Router();

const { customerSignup, customerLogin ,getCustomers} = require("../controllers/customer-controller");


router.post('/customerSignup', customerSignup);
router.post('/customerlogin', customerLogin);
router.get('/getCustomers', getCustomers);






module.exports  = router;