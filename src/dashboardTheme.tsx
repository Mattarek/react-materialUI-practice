import { createTheme } from '@mui/material';

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
