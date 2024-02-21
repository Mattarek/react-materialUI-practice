import React from 'react';
import Grid from '@mui/material/Grid';
import { Notifications } from '../components/common/Notifications/Notifications';
import { BasicMenu } from '../components/BasicMenu/BasicMenu';
import { BasicModal } from '../components/Modals/Modal';

export const Authentication = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid
            item
            xs={8}>
            This is authentication page.
            <Notifications
                iconColor='primary'
                badgeContent={0}
                handleOpen={handleOpen}
            />
            <BasicMenu
                open={open}
                handleClose={handleClose}
            />
            <BasicModal
                open={open}
                setClose={() => setOpen(false)}
            />
        </Grid>
    );
};
