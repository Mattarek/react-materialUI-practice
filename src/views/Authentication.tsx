import Grid from '@mui/material/Grid';
import { CommonButton } from '../components/common/commonButton/CommonButton';
export const Authentication = () => {
    const buttonStyles = {
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'yellow',
        },
    };

    return (
        <Grid
            item
            xs={8}>
            Authentication
            <CommonButton
                size='large'
                variant='contained'
                color='error'
                sx={buttonStyles}
                disabled={false}>
                Click!
            </CommonButton>
        </Grid>
    );
};
