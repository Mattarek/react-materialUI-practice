import { Menu, MenuItem } from '@mui/material';

export const BasicMenu = ({ handleClose, open }) => {
    return (
        <div>
            <Menu
                id='basic-menu'
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
};
