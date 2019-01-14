const router = require("express").Router();
const knifeRoutes = require("./knives");
const userRoutes = require("./user");
const loginRoutes = require("./login");
const fileRoutes = require("./file");


// knives routes
router.use("/knives", knifeRoutes);
//bcrypt user route
router.use("/user", userRoutes);
//bcrypt login route
router.use("/login", loginRoutes);
//file upload route
router.use("/file", fileRoutes);


module.exports = router
