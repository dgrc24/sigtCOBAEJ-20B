const { crearUser, getInfo } = require("./user.controller");
const router = require('express').Router();

router.post("/crearUsuario", crearUser);
router.get("/getAlumnoInfo", getInfo);

module.exports = router;




