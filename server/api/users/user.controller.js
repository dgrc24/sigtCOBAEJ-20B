const { cleanNode } = require("knockout");
const { crear, getInfoUser } = require("./user.service");
const { genSaltSync, hashSync } = require('bcrypt')

module.exports = {
    crearUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        crear(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error de conexión a la base de datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getInfo: (req, res) => {
        getInfoUser((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.send(results);
        });
    }
}