const express = require("express");
const { login, logout } = require("../../utils/auth");

const router = express.Router();

router.post("/login", login)
router.get("/logout", logout)

module.exports = router;