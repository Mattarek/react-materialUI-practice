import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { IconButtonCustom } from './Button';

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

export const Notifications = ({
    iconColor,
    badgeContent,
    onClick,
    anchorEl,
}: NotificationsProps) => {
    const newNotifications = `You have ${badgeContent} new notifications!`;
    const noNotifications = `No new notifications`;

    return (
        <Tooltip title={badgeContent ? newNotifications : noNotifications}>
            <IconButtonCustom
                color={iconColor}
                onClick={onClick}
                anchorEl={anchorEl}>
                <Badge
                    badgeContent={badgeContent}
                    color='error'>
                    <NotificationsIcon />
                </Badge>
            </IconButtonCustom>
        </Tooltip>
    );
};
