import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, ThemeProvider, Box, Grid, Button, IconButton, Hidden, Drawer } from '@material-ui/core';
import theme from '../assets/Tema'

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import white from '@material-ui/core/colors'
import { CallReceived } from '@material-ui/icons';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    tittle: {

        flexGrow: 1,
        color: "white",
        textAlign: "center"
    },
    TitlteH: {
        color: "white",
        alignSelf: "center"
    },
    menuButton: {
        marginRight: theme.spacing(1),
        color: "white",
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },

    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: 'calc(100% - 240px)',
            marginLeft: drawerWidth
        },


    }

}))



export default function ProminentAppBar(props) {
    const classes = useStyles()

    return (

        <ThemeProvider theme={theme}> <AppBar className={classes.appBar} position="fixed" color="secondary" >
            <Grid container spacing={1}
                alignItems="left"
                direction="row">
                <Grid item xs={1} >
                    <IconButton className={classes.menuButton} aria-label="menu"
                        onClick={() => props.accAbrir()}>
                        <MenuIcon />
                    </IconButton>
                </Grid>

                <Grid item xs={11} >
                    <Toolbar >

                        <Typography variant="h6" color="textPrimary" className={classes.tittle} >
                            Sistema Gestor de Trámites Internos "SIGT"
                </Typography>
                        <Hidden xsDown>
                            <Button variant="text" className={classes.TitlteH}>

                                INICIO</Button></Hidden>
                    </Toolbar></Grid>
            </Grid>

        </AppBar></ThemeProvider>

    );
}
