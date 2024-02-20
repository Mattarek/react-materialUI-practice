import React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface CustomIconButtonProps extends IconButtonProps {
    anchorEl: HTMLElement | null;
    badgeContent: React.ReactNode;
}

export const CustomIconButton: React.FC<CustomIconButtonProps> = ({
    badgeContent,
    ...IconButtonProps
}) => {
    return (
        <IconButton {...IconButtonProps}>
            <Badge
                badgeContent={badgeContent}
                color='error'>
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
};
