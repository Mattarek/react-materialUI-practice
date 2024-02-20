import React from 'react';
import Grid from '@mui/material/Grid';
import { Notifications } from '../components/common/Notifications/Notifications';
import { BasicMenu } from '../components/BasicMenu/BasicMenu';

export const Authentication = () => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event: any) => {
        setAnchorEl(event?.currentTarget);
        setOpen(true);
    };

    const handleClose = (event: any) => {
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
                anchorEl={anchorEl}
                onClick={() => console.log('click')}
            />
            <BasicMenu
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
            />
        </Grid>
    );
};
