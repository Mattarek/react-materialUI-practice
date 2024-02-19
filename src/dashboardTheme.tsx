import createTheme from '@mui/material/styles/createTheme';

export const dashboardTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                },
            },
        },
    },
});
