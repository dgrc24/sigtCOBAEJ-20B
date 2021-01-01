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
}