let express = require("express");
const { requireSignin } = require("../controllers/auth");
let { isAdmin, isAuth } = require("../utils");

const router = express.Router();

//import controller
let { read, readUsers, update } = require("../controllers/user");

router.get("/user", isAuth, isAdmin, readUsers);
// router.get("/user",  readUsers);
router.get("/user/:id", requireSignin, read);
router.put("/user/update", requireSignin, update);
// router.put("/admin/update", requireSignin, adminMiddleware, update);

module.exports = router;
