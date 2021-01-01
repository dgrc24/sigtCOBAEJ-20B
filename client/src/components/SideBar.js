import React from 'react'
import { makeStyles, Drawer, Divider, Hidden } from '@material-ui/core'
import ListaDep from './ListaDep';
import logo from '../assets/img/logocobaej.png';
const drawerWidth = 240;


const styles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPapper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,


}))

const SideBar = (props) => {
    const classes = styles()
    return (
        <Drawer
            className={classes.drawer}
            variant={props.variant}
            open={props.open}
            classes={{ paper: classes.drawerPapper, }
            }
            anchor="left"
            onClose={props.onClose ? props.onClose : null}>
            <div className={classes.toolbar}>
                <img
                    src={logo}
                    width="140px"
                    height="60px"
                /></div>
            <Divider />
            <ListaDep />

        </Drawer >
    )
}

export default SideBar
