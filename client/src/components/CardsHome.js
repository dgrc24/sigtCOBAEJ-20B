import { Box, Button, Grid, Typography, Table, TableHead, TableRow, TableCell,
    TableBody, 
    Tab} from '@material-ui/core'
    import {React, useState, useEffect} from 'react'
    import Card from './Cards/Card'
    import Axios from 'axios'
    import CardHeader from './Cards/CardHeader'
    import CardBody from './Cards/CardBody'
    import CardFooter from './Cards/CardFooter'
    import { CardMedia, Container, makeStyles} from '@material-ui/core'
    import BecasBanner from '../assets/img/banner-beni.jpg'
    import DeportesBanner from '../assets/img/BANNER-DEPORTES.jpg'
    
    
    const styles = makeStyles((theme) => ({
        root: {
            display: 'static'
        }
        
        }));
    
      
      
      
        

function CardsHome() {
    const [actividadesExtra, setActividadesExtra] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/actividadesExtra/getInfo').then((response) => {
            setActividadesExtra(response.data)
        })

    }, []);
    
    
    const classes= styles();
    return (
        <Grid  className={classes.root} container spacing={4}>
            <Grid item sm={12}>
        <Card >
            <CardMedia
                component="img"
                image={BecasBanner}
                ></CardMedia>
            <CardHeader  >
                <Typography variant="h4" align="center">
                    BECAS BENITO JUÁREZ "AGOSTO-DIC 2020"
                </Typography>
            </CardHeader>
            <CardBody>
                <Typography variant='h5' align="justify">
                    <br></br> Población a la que está dirigida:<br></br>
                    <Typography variant='h6' align='justify'>
                        Alumnas y alumnos que cursan la Educación Media Superior en instituciones públicas de modalidad escolarizada.</Typography>

                    <br></br>Registro: <br></br>
                    <Typography variant='h6' align='justify'>
                        Se realiza directamente en los planteles escolares, con personal acreditado y capacitado que realiza el padrón. La Coordinación Nacional informa a la escuela la fecha y el medio de entrega.
                    </Typography>
                    <br></br>Monto y forma de pago: <br></br>
                    <Typography variant='h6' align='justify'> Consta de 800 pesos mensuales entregados bimestralmente por becario (1,600 pesos bimestrales), durante los diez meses que dura el ciclo escolar.
                    
                    <br></br>
                    Dependiendo de la localidad donde viva el o la becaria, puede ser mediante pago electrónico o en mesas de pago establecidas en localidades donde no hay bancos.
                    </Typography>


                </Typography>
            </CardBody>
            <CardFooter>
                <Typography>
                    Departamento de control escolar.
                </Typography>
                <Button variant="contained"> Más información</Button>
            </CardFooter>
        </Card>
        </Grid>

        <Grid item sm={12}>
        <Card >
            <CardMedia
                component="img"
                image={DeportesBanner}
                height='180px'
                ></CardMedia>
            <CardHeader  >
                <Typography id='Titulo' variant="h4" align="center">
                    YA PUEDES INSCRIBIRTE A LOS TALLERES DEPORTIVOS Y CULTURALES
                </Typography>
            </CardHeader>
            <CardBody>
                <Typography variant='h5' align="justify">
                    <br></br> Convocatoria:<br></br>
                    <Typography variant='h6' align='justify'>
                        Como parte de tu formación integral, se te invita a inscribirte a un taller  deportivo y uno cultural que funjiran como
                        actividades extraescolares. 
                        Se anexa a continuación la lista de talleres disponibles, el horario y lugar donde se llevará a cabo
                        para que elijas el de tu preferencia.</Typography>
<br></br>
                <Container fixed>
                    {actividadesExtra.map((val)=>{
                        return(
                            <div>     
                    <Table>
                    
                <TableBody>
                    <TableRow>
                        <TableCell align="center" size="small">{val.nombre}</TableCell>
                        <TableCell align="center">{val.horario}</TableCell>
                        <TableCell align="center">{val.categoria}</TableCell>
                        <TableCell align="center">{val.lug_disp}</TableCell>
                        <TableCell align="center">{val.maestro}</TableCell>
                    </TableRow>
                </TableBody>
                    </Table>
                    </div>
                    )
                        })}
                      
                    </Container>
                    <br></br>Registro: <br></br>
                    <Typography variant='h6' align='justify'>
                       Se realiza a través de la plataforma SIGT antes del 08 de Febrero del 2021
                    </Typography>
                    
                </Typography>
            </CardBody>
            <CardFooter>
                <Typography>
                    Departamento de control escolar.
                </Typography>
                <Button variant="contained"> Ir a control escolar</Button>
            </CardFooter>
        </Card>

        </Grid>
        </Grid>
    )
}

export default CardsHome
