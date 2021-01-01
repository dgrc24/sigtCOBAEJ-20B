
import { createMuiTheme, } from '@material-ui/core/styles';




const theme = createMuiTheme({
    palette: {
        //blanco
        primary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#fff',
        },
        //amarillo
        secondary: {
            light: '#ffc500',
            main: '#ffc500',
            dark: '#ffc500',
            contrastText: '#ffc500',
        },
        //plomo
        error: {
            light: '#455d7a',
            main: '#455d7a',
            dark: '#455d7a',
            contrastText: '#455d7a',
        },
        //rojo
        warning: {

            light: '#be1e2d',
            main: '#be1e2d',
            dark: '#be1e2d',
            contrastText: '#be1e2d',
        },
        //negro
        info: {
            light: '#000',
            main: '#000',
            dark: '#000',
            contrastText: '#000',

        }
    },
});

export default theme;
