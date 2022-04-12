import { createTheme } from '@mui/material/styles';
import '@fontsource/space-mono';


const Theme = createTheme({
    typography: {
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Space Mono", monospace'
        ].join(','),
    },
});

export default Theme;