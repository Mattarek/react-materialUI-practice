import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
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
    onClick: () => void;
    handleOpen: () => void;
}

export const Notifications = ({
    iconColor,
    badgeContent,
    handleOpen,
}: NotificationsProps) => {
    const newNotifications = `You have ${badgeContent} new notifications!`;
    const noNotifications = `No new notifications`;

    return (
        <Tooltip title={badgeContent ? newNotifications : noNotifications}>
            <IconButton
                color={iconColor}
                onClick={handleOpen}>
                <Badge
                    badgeContent={badgeContent}
                    color='error'>
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Tooltip>
    );
};
