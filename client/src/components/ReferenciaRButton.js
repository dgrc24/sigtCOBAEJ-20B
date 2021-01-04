import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Axios from 'axios';



const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(2),
    },
}));

export default function CustomizedSelects() {
    const classes = useStyles();
    const [servicio, setServicio] = React.useState('');
    const handleChange = (event) => {
        setServicio(event.target.value);
    };
    const [listadoServicios, setListadoServicios] = React.useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/users/getServicios').then((response) => {
            setListadoServicios(response.data);
        })
    }, []);
    return (
        <div>

            <FormControl variant="filled" className={classes.formControl} fullWidth="true">
                <InputLabel>Servicios</InputLabel>
                <Select
                    native
                    value={servicio}
                    onChange={handleChange}
                    inputProps={{
                        name: 'Servicios',

                    }}
                >
                    <option aria-label="None" value=""> Seleccionar</option>
                    {listadoServicios.map(val => {
                        return (
                            <option>{val.nombre}</option>

                        )
                    })}



                </Select>

            </FormControl>
        </div>
    );
}