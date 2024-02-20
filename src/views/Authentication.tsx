import Grid from '@mui/material/Grid';
import { Notifications } from '../components/common/Notifications/Notifications';
import { BasicMenu } from '../components/BasicMenu/BasicMenu';

export const Authentication = () => {
    return (
        <Grid
            item
            xs={8}>
            This is authentication page.
            <Notifications
                iconColor='primary'
                badgeContent={0}
            />
            <BasicMenu />
        </Grid>
    );
};
