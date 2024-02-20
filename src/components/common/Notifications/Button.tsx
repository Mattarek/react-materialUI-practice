import React from 'react';
import IconButton from '@mui/material/IconButton';
import { IconButtonProps } from '@mui/material/IconButton';

type IconColor =
    | 'default'
    | 'error'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning';

interface NotificationsProps {
    iconColor: IconColor;
    badgeContent: number;
    anchorEl: boolean | null;
    onClick: () => void;
}

interface CustomIconButtonProps extends IconButtonProps {
    iconColor: IconColor;

    anchorEl: boolean | null;
    onClick: () => void;
    badgeContent: React.ReactNode;
}

export const IconButtonCustom: React.FC<CustomIconButtonProps> = ({
    children,
    color,
    onClick,
    anchorEl,
}) => {
    return (
        <IconButton
            color={color}
            onClick={onClick}
            anchorEl={anchorEl}>
            {children}
        </IconButton>
    );
};
