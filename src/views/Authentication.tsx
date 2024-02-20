import NotificationsIcon from '@mui/icons-material/Notifications';
import Grid from '@mui/material/Grid';

export const Authentication = () => {
    return (
        <Grid
            item
            xs={8}>
            This is authentication page.
            <NotificationsIcon
                iconColor='error'
                badgeContent={4}
            />
        </Grid>
    );
};
