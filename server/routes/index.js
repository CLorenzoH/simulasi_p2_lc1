//@ts-check
const router = require("express").Router()
const Controller = require("../controllers/")
const { authenticate } = require("../middlewares/authenticate")
const { authorize } = require("../middlewares/authorize")

router.post("/register", Controller.register)

router.post("/login", Controller.login)

router.get("/photos", authenticate, authorize, Controller.getPhotos)

module.exports = router
