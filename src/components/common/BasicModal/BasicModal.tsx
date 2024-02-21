import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CustomIconButton } from '../CustomIconButton/CustomIconButton';

export const BasicModal = ({
    open,
    onClose,
    title,
    subTitle,
    content,
    onSubmit,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                <Typography
                    variant='h6'
                    component='h2'>
                    {title}
                </Typography>
                <Typography sx={{ mt: 2 }}>{subTitle}</Typography>
                {content}
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <CustomIconButton
                        variant='contained'
                        onClick={onSubmit}>
                        Submit
                    </CustomIconButton>
                    <CustomIconButton onClick={onClose}>
                        Cancel
                    </CustomIconButton>
                </Box>
            </Box>
        </Modal>
    );
};
