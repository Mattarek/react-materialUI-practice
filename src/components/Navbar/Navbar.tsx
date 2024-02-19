import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
