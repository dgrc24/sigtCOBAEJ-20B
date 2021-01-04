import 'date-fns'
import { React, useEffect, useState } from 'react'
import { TextField, makeStyles, Grid, Typography, Divider, Button, } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { esES } from '@material-ui/core/locale'
import Axios from 'axios'

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers';
import { getDate, getDay, getHours, getMinutes, getMonth, getTime, getUnixTime, getYear } from 'date-fns'



const styles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: "100%",

        },
    },
    buttonA: {
        left: "40%",
        position: "relative",
        margin: "15px",
        width: "100px",
        background: "#008f39",
        color: "#fff"

    },
    buttonC: {
        left: "40%",
        position: "relative",
        margin: "15px",
        width: "100px",
        background: "#e4000f",
        color: "#fff"

    },

    datosAC: {
        width: "100%"
    }

}));



function FormPsic() {


    const [selectedDate, setSelectedDate] = useState(new Date);
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [nombre_alumno, setNombreAlumno] = useState("");
    const [semestre, setSemestre] = useState(0);
    const [grupo, setGrupo] = useState("");
    const [numCtrl, setNctrl] = useState("");
    const [listAlumnos, setListAlumnos] = useState([])
    const [listCrearCita, setListaCrearCita] = useState([])

    const crearCita = () => {
        Axios.post("http://localhost:3001/api/users/crearCita", {
            fecha: fecha,
            hora: hora,
            nombre_alumno: nombre_alumno,
            semestre: semestre,
            grupo: grupo,
            numCtrl: numCtrl
        }).then(() => {
            setListaCrearCita([
                ...listCrearCita, {
                    fecha: fecha,
                    hora: hora,
                    nombre_alumno: nombre_alumno,
                    semestre: semestre,
                    grupo: grupo,
                    numCtrl: numCtrl
                }
            ])

            alert("CREADO EXITOSAMENTE!")

        })
    }
    useEffect(() => {
        Axios.get('http://localhost:3001/api/users/getAlumnoInfo').then((response) => {
            setListAlumnos(response.data);
        })

    }, []);
    function filterWeekends(date) {
        // Return false if Saturday or Sunday
        return date.getDay() === 0 || date.getDay() === 6;
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);

        const sFecha = (getDate(date) + "/" + Number(getMonth(date) + 1) + "/" + getYear(date))
        const sHora = (getHours(date) + " " + "HORAS" + " Y " + getMinutes(date) + " MINUTOS")
        setFecha(sFecha)
        setHora(sHora)
    };

    const handleNombreClick = () => {
        setNombreAlumno(document.getElementById('Nombre').value)
        setSemestre(document.getElementById('Semestre').value)
        setGrupo(document.getElementById('Grupo').value)
        setNctrl(document.getElementById('nc').value)
        console.log(listCrearCita);
    }

    const classes = styles()
    return (

        <form className={classes.root} noValidate autoComplete="off">

            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <Typography variant="h4" color="initial" align="center"> Datos personales y académicos</Typography>
                    <Divider />
                </Grid>
                {listAlumnos.map((val) => {
                    return (
                        <Grid container spacing={1} >
                            <Grid item sm={5} spacing={3}>
                                <TextField
                                    disabled
                                    id="nc"
                                    label="Número de control"
                                    value={val.numCtrl}
                                    variant="filled"
                                />
                            </Grid>

                            <Grid item sm={3}>
                                <TextField
                                    disabled
                                    id="Semestre"
                                    label="Semestre en curso"
                                    value={val.semestre}
                                    variant="filled"
                                    content />
                            </Grid>
                            <Grid item sm={4}>
                                <TextField
                                    disabled
                                    id="Especialidad"
                                    label="Especialidad: "
                                    value={val.especialidad}
                                    variant="filled"
                                    content />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    disabled
                                    id="Nombre"
                                    label="Nombre del Alumno: "
                                    value={val.nombres + " " + val.apell_pat + " " + val.apell_mat}
                                    variant="filled"
                                    content />
                            </Grid>
                            <Grid item sm={3}>
                                <TextField
                                    disabled
                                    id="Grupo"
                                    label="Grupo"
                                    value={val.grupo}
                                    variant="filled"
                                    content />
                            </Grid>
                            <Grid item sm={3}>
                                <TextField
                                    disabled
                                    id="Turno"
                                    label="Turno: "
                                    value={val.turno}
                                    variant="filled"
                                    content />
                            </Grid>
                        </Grid>
                    )
                })}

                <Button className={classes.buttonA} onClick={handleNombreClick}>CONTINUAR</Button>


                < Grid item lg={12}>
                    <Typography variant="h4" color="initial" align="center">Datos de la reservación</Typography>
                </Grid>


                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item sm={5}>
                        <KeyboardDatePicker
                            disableToolbar
                            autoOk
                            variant="inline"
                            format="EE-dd/MM/yyyy"
                            shouldDisableDate={filterWeekends}
                            minDate={new Date()}
                            margin="normal"
                            id="fechaCita"
                            label="Seleccionar fecha de la cita: "
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Grid item sm={2} />
                    <Grid item sm={5}>
                        <KeyboardTimePicker
                            margin="normal"
                            autoOk
                            id="time-picker"
                            label="Seleccionar hora de la cita:"
                            value={selectedDate}
                            minutesStep='30'
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />

                    </Grid>

                </MuiPickersUtilsProvider>
                <Grid container direction="row" sm={12} >
                    <Grid item sm={6} >
                        <Button variant="contained" className={classes.buttonC}  >
                            Cancelar
                    </Button>

                    </Grid>
                    <Grid item sm={6}>
                        <Button variant="contained" className={classes.buttonA} onClick={crearCita}>
                            Confirmar
                    </Button></Grid>
                </Grid>

            </Grid>

        </form >


    )
}

export default FormPsic
