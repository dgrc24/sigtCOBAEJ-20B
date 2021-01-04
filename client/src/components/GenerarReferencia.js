import React, { useEffect, useState } from 'react'
import { Typography, Divider, Grid, makeStyles, TextField, Button } from '@material-ui/core'
import Axios from 'axios'
import ReferenciaRButton from './ReferenciaRButton'

const styles = makeStyles((theme) => ({
    gridBoton: {
        textAlign: "center",
        marginTop: "20px",
    },
    btnAceptar: {
        background: "#008F39",
        color: "#fff"
    }
}));

function GenerarReferencia() {
    const [listAlumnos, setListAlumnos] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/users/getAlumnoInfo').then((response) => {
            setListAlumnos(response.data);
        })
    }, []);
    const classes = styles();
    return (
        <div>
            <div>
                <Grid container spacing={6}>
                    <Grid item sm={12} lg={12} xs={12} xl={12}>
                        <Typography variant="h4" align="center">
                            Generar referencias bancarias
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item sm={12} lg={12} xs={12} xl={12}>
                        <Typography variant="h5">Instrucciones:</Typography> <br></br>

                        <Typography size="20px" align="justify">Selecciona el concepto de pago que corresponda a la referencia que deseas sea generada.
                        <br></br> Verifica que la información mostrada corresponda a tus datos personales.</Typography>
                    </Grid>
                    <Grid item sm={12} lg={12} xs={12} xl={12}>
                        <Typography variant="h5" color="textPrimary"> DATOS DEL ALUMNO: </Typography>
                        <br></br><br></br>

                        <Grid container spacing={8} >
                            {listAlumnos.map((val) => {
                                return (
                                    <Grid container spacing={8}>
                                        <Grid item xs={12} sm={12} lg={6} xl={6} alignContent="center">
                                            <TextField fullWidth="true"
                                                variant="filled"
                                                disabled
                                                value={val.nombres + " " + val.apell_pat + " " + val.apell_mat} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={6} xl={6} alignContent="center">
                                            <TextField fullWidth="true"
                                                variant="filled"
                                                disabled
                                                value={val.numCtrl} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={6} xl={6} alignContent="center">
                                            <TextField fullWidth="true"
                                                variant="filled"
                                                disabled
                                                value={val.semestre + " " + val.grupo} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={6} xl={6} alignContent="center">
                                            <TextField fullWidth="true"
                                                variant="filled"
                                                disabled
                                                value={val.especialidad} />
                                        </Grid>
                                    </Grid>


                                )
                            })}
                        </Grid>
                    </Grid>
                    <Grid item sm={12} lg={12} xs={12} xl={12} className={classes.gridBoton}>
                        <Button variant="contained" className={classes.btnAceptar}>
                            Validar información
                        </Button>
                    </Grid>
                    <Grid item sm={12} lg={12} xs={12} xl={12}>
                        <ReferenciaRButton fullWidth="true" />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default GenerarReferencia
