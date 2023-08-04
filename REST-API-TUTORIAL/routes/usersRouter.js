const router = require("express").Router();
const { getHome, getUsers, createUser, updateUser, deleteUser } = require("../controllers/usersController");

router.get("/",getHome)
router.get("/users",getUsers)
router.post("/users",createUser)
router.put("/users/:id",updateUser)
router.delete("/users/:id",deleteUser)

module.exports = router;
