import React, { Component } from 'react'
import { Button, Typography, withStyles } from '@material-ui/core'
import Card from './Cards/Card'
import CardHeader from './Cards/CardHeader'
import CardBody from './Cards/CardBody'
import CardFooter from './Cards/CardFooter'
import tblTall from '../assets/img/tblTall.jpg'
const styles = theme => ({

});

class CardCtrlEsc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card>
                    <CardHeader color="success">
                        <Typography variant="h4" >BECAS BENITO JUÁREZ</Typography>
                    </CardHeader>
                    <CardBody>
                        <Typography>
                            Solicitar activación de ficha SUBES. <br></br>
                            <br></br>

                        REQUISITOS: <br></br>

                            * Promedio escolar del semestre inmediato anterior. <br></br>
                            * CURP <br></br>
                            * Contestar el formulario con los datos solicitados anteriormente.
                    </Typography>
                    </CardBody>
                    <CardFooter>
                        <Button variant="contained" color="secondary"> IR AL FORMULARIO</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader color="success">
                        <Typography variant="h4" >TALLERES DEPORTIVOS Y CULTURALES</Typography>
                    </CardHeader>
                    <CardBody>
                        <Typography>
                            TALLERES DISPONIBLES <br></br>
                            <br></br>

                            <img
                                src={tblTall}
                                width="90%"
                                height="80%"
                            ></img>
                        </Typography>
                    </CardBody>
                    <CardFooter>
                        <Button variant="contained" color="secondary"> INSCRIBIRME</Button>
                    </CardFooter>
                </Card>
            </div>

        );
    }
}
export default withStyles(styles)(CardCtrlEsc);