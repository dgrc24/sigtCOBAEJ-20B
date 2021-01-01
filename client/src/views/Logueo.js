import React, { Component } from 'react'
import {
    Grid, Typography, Link, CssBaseline, Avatar, Paper,
    TextField,
    FormControlLabel, Checkbox,
    Button, Box, AppBar, Toolbar, withStyles
} from '@material-ui/core'
import Dialogo from '../components/Dialogo';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as link } from 'react-router-dom'





const styles = theme => ({
    root: {
        height: '100vh',

    },
    image: {
        backgroundImage: "url(https://cobaej.edu.mx/component/Arte/noticias/elemento_24_imagen_1.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    navbar: {
        paddingBottom: 0
    }

});


function Copyright() {

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'SIGT © '}
            <Link color="inherit" href="https://cobaej.edu.mx/">
                COBAEJ
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class Logueo extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { classes } = this.props;
        return (
            <Grid container component="main" className={classes.root} >
                <CssBaseline />
                <Grid item xs={12} sm={12} md={12}>
                    <AppBar position="fixed" color="secondary" >
                        <Toolbar>
                            <Typography variant="h6" className={classes.title} align="center">
                                Sistema Gestor de Trámites Internos del COBAEJ 7
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Iniciar sesión
            </Typography>
                        <form className={classes.form} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo electrónico"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Recordar usuario"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                href="/Home"
                            >
                                Ingresar
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Dialogo variant="body2" buttonTitulo="¿Has olvidado tu contraseña?"
                                        titulo="Recuperar contraseña"
                                        body="Contacte al departamento de control escolar
                                    para que le sea proporcionada una nueva contraseña"></Dialogo>
                                </Grid>

                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid >



        )
    }
}

export default withStyles(styles)(Logueo);
