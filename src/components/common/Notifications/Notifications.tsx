import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Notifications = () => {
    return (
        <Badge
            badgeContent={4}
            color='primary'>
            <NotificationsIcon />
        </Badge>
    );
};
