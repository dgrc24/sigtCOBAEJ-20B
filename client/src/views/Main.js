import React from 'react'
import {
    makeStyles, Typography, Hidden, colors, Divider, Button,
} from '@material-ui/core'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom'
import Psicologia from '../views/Psicologia'
import CtrlEsc from '../views/CtrlEsc'
import HomePage from '../views/HomePage'
import Financieros from '../views/Financieros'
import Inbox from '../views/Buzon'
import MiCuenta from '../views/MiCuenta'





const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8),

    },
    cardbg: {
        color: '#2BD9B6'
    }


}))

const Main = () => {
    const classes = styles()
    const [abrir, setAbrir] = React.useState(false)
    const accAbrir = () => {
        setAbrir(!abrir)
    }

    return (


        <div className={classes.root}>
            <NavBar accAbrir={accAbrir} />
            <Hidden xsDown>
                <SideBar
                    variant="permanent"
                    open={true} />
            </Hidden>
            <Hidden smUp>
                <SideBar
                    variant="temporary"
                    open={abrir}
                    onClose={accAbrir} />
            </Hidden>


            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Switch>
                    <Route exact path="/Home" component={HomePage} />
                    <Route path="/Main/Psicologia" component={Psicologia} />
                    <Route path="/Main/CtrlEsc" component={CtrlEsc} />
                    <Route path="/Main/Financieros" component={Financieros} />
                    <Route path="/Main/Inbox" component={Inbox} />
                    <Route path="/Main/Micuenta" component={MiCuenta} />
                </Switch>
            </div>

        </div >
    )
}

export default Main
