import { Menu, MenuItem } from '@mui/material';

interface BasicMenuProps {
    open: boolean;
    handleClose: () => void;
}

export const BasicMenu = ({ handleClose, open }: BasicMenuProps) => {
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
