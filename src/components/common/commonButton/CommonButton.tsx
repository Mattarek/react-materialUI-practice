import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export const CommonButton = ({
    children,
    color,
    disabled,
    size,
    sx,
    variant,
}: ButtonProps) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            sx={sx}
            variant={variant}>
            {children}
        </Button>
    );
};
