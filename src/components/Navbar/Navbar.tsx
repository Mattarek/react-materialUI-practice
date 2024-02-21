import {
    Box,
    Drawer,
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material/';
import { mainNavbarItems } from '../constants/navbarItems';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const drawerWidth = 240;
    const navigate = useNavigate();
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#101F33',
                    color: 'rgba(255, 255, 255,0.7)',
                },
            }}
            anchor='left'>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {mainNavbarItems.map(({ id, label, route, icon }) => (
                        <ListItem
                            key={id}
                            disablePadding
                            onClick={() => navigate(route)}>
                            <ListItemButton>
                                <ListItemIcon
                                    sx={{ color: 'rgba(255, 255, 255,0.7)' }}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Box>
        </Drawer>
    );
};
