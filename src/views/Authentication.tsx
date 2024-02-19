import Grid from '@mui/material/Grid';
import { CommonButton } from '../components/common/commonButton/CommonButton';
export const Authentication = () => {
    const buttonStyles = {
        fontWeight: 600,
        fontSize: '0.875rem',
        textTransform: 'capitalize',
        borderRadius: 2.5,
        '&.MuiButton-contained': {
            backgroundColor: '#009db3',
            '&:hover': {
                backgroundColor: '#006db3',
            },
        },
        '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    };

    return (
        <Grid
            item
            xs={8}
            sx={{ backgroundColor: '#009be5' }}>
            Authentication
            <CommonButton
                sx={buttonStyles}
                variant='contained'>
                Add user!
            </CommonButton>
            <CommonButton
                variant='outlined'
                sx={buttonStyles}>
                Click!
            </CommonButton>
        </Grid>
    );
};
