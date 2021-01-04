const { crearUser, getInfo, creacionCitas, getServicios } = require("./user.controller");
const router = require('express').Router();

router.post("/crearUsuario", crearUser);
router.get("/getAlumnoInfo", getInfo);
router.post("/crearCita", creacionCitas);
router.get("/getServicios", getServicios);

module.exports = router;




