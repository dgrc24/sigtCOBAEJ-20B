import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, Divider, } from '@material-ui/core'
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import { withRouter } from "react-router-dom";





const ListaDep = (props) => {
    const { history } = props;
    const itemsList = [
        {
            text: "Home",
            icon: <HomeSharpIcon />,
            onClick: () => history.push("/Home")
        },
        {
            text: "Control Escolar",
            icon: <SchoolSharpIcon />,
            onClick: () => history.push("/Main/CtrlEsc")
        },
        {
            text: "Recursos Financieros",
            icon: <MonetizationOnSharpIcon />,
            onClick: () => history.push("/Main/Financieros")
        },
        {
            text: "Departamento de Psicología",
            icon: <LocalHospitalSharpIcon />,
            onClick: () => history.push("/Main/Psicologia")
        },
        {
            text: "Mensajes",
            icon: <EmailSharpIcon />,
            onClick: () => history.push("/Main/Inbox")
        },
        {
            text: "Mi cuenta",
            icon: <AccountBoxSharpIcon />,
            onClick: () => history.push("/Main/Micuenta")
        },
        {
            text: "Salir",
            icon: <ExitToAppSharpIcon />,
            onClick: () => history.push("/Main/Salir")
        },
    ];

    return (


        <List component='nav'>
            {itemsList.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                    <ListItem button key={text} onClick={onClick}>
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                        <ListItemText primary={text} />
                    </ListItem>);
            })}

        </List>



    )
}

export default withRouter(ListaDep)
