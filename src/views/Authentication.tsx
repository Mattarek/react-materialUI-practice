import Grid from '@mui/material/Grid';
import { Notifications } from '../components/common/Notifications/Notifications';

export const Authentication = () => {
    return (
        <Grid
            item
            xs={8}>
            This is authentication page.
            <Notifications
                iconColor='error'
                badgeContent={4}
            />
        </Grid>
    );
};
