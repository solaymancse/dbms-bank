const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const customerSignup = async (req, res, next) => {
  const {
    name,
    email,
    password,
    accountNumber,
    address,
    phone,
    initDeposit,
  } = req.body;

  let existingCustomer;
  try {
    existingCustomer = await Customer.findOne({ email: email });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
  if (existingCustomer) {
    return res.status(400).json({ message: "user already exists" });
  }
  const hashedPassword = bcrypt.hashSync(password);

  const newCustomer = new Customer({
    name,
    email,
    password: hashedPassword,
    accountNumber,
    address,
    phone,
    initDeposit,
  });

  try {
    const savedCustomer = await newCustomer.save();
    res.json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

const customerLogin = async (req, res, next)=> {
    const { email, password } = req.body;

    let existingCustomer;
    try{
        existingCustomer = await Customer.findOne({email:email});
    }catch(err){
        return res.status(404).json({message:"invalid"});
    }

    if(!existingCustomer){
        return next(new ErrorResponse("User not found.... Please contact the branch!!", 400))
       
    }
    
    const isPasswordCorrect = bcrypt.compareSync(password, existingCustomer.password);

    if(!isPasswordCorrect){
        return res.status(400).json({message:"invalid email or password"});
    }

    const token = jwt.sign({id: existingCustomer._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: "1hr"
    });

    if(req.cookies[`${existingCustomer._id}`]){
        req.cookies[`${existingCustomer._id}`] = "";
    }

    res.cookie(String(existingCustomer._id), token, {
        path:"/",
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
        sameSite:"lax"
    })
    return res.status(200).json({ message:"Successfully Logged In",user:existingCustomer,token});
};

const getCustomers = async (req, res, next) => {

  try{
    const customers = await Customer.find();
    res.status(201).json(customers);
    console.log(customers);

  }catch(err){
    return res.status(404).json({message: err.message});

  }
};


exports.customerSignup = customerSignup;
exports.customerLogin = customerLogin;
exports.getCustomers = getCustomers;

