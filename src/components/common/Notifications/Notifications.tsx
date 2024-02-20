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
    return (
        <Tooltip title={`You have ${badgeContent} new notifications!`}>
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
