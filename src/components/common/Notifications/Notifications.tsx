import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

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
}

export const Notifications = ({
    iconColor,
    badgeContent,
}: NotificationsProps) => {
    const newNotifications = `You have ${badgeContent} new notifications!`;
    const noNotifications = `No new notifications`;

    return (
        <Tooltip title={badgeContent ? newNotifications : noNotifications}>
            <IconButton color={iconColor}>
                <Badge
                    badgeContent={badgeContent}
                    color='primary'>
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Tooltip>
    );
};
