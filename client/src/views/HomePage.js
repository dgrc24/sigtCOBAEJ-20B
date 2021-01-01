import React from 'react'
import CardAvisos from '../components/CardsHome'
import { Divider, makeStyles, Typography } from '@material-ui/core'
const styles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },



}))

function HomePage() {
    const classes = styles();
    return (
        <div className={classes.container}>
            <div >
                <Typography variant='h5' align='center'>
                    Avisos recientes
                </Typography>

            </div>
            <Divider></Divider>

            <CardAvisos />


        </div>
    )
}

export default HomePage
