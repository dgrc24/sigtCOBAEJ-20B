const pool = require('../../config/database');

module.exports = {
    crear: (data, callBack) => {
        pool.query(
            'insert into altaUser(numCtrl, password) values(?,?)',
            [
                data.numCtrl,
                data.password
            ], (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }

        )
    },

    getInfoUser: callBack => {
        pool.query("select * from datosac_Al inner join datosp_al", [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getListServicios: callBack => {
        pool.query("select * from servicios_financieros", [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            });
    },
    crearCita: (data, callBack) => {
        pool.query(
            "insert into citas (fecha,hora,nombre_alumno,semestre,grupo,numCtrl) values(?,?,?,?,?,?)",
            [data.fecha, data.hora, data.nombre_alumno, data.semestre, data.grupo, data.numCtrl],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results)
            }
        );
    }
}