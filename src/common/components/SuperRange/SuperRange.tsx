import React from 'react';
import { Slider } from '@mui/material';
import type { SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            sx={{
                width: '100%',
                height: '4px',
                color: 'var(--primary-color, #3f5d9d)',

                '& .MuiSlider-track': {
                    height: '4px',
                    borderRadius: '2px',
                },

                '& .MuiSlider-rail': {
                    height: '4px',
                    borderRadius: '2px',
                    backgroundColor: 'var(--border-color, #e0e0e0)',
                    opacity: 1,
                },

                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: 'var(--card-bg, #ffffff)',
                    border: '2px solid var(--primary-color, #3f5d9d)',

                    '&:focus, &:hover, &.Mui-active': {
                        boxShadow: 'none',
                    },

                    '&::before': {
                        display: 'none',
                    },

                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-color, #3f5d9d)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                },

                '& .MuiSlider-valueLabel': {
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: 'var(--primary-color, #3f5d9d)',
                    color: '#ffffff',
                    borderRadius: '4px',
                    padding: '2px 6px',

                    '&::before': {
                        display: 'none',
                    },
                },
            }}
            {...props}
        />
    );
};

export default SuperRange;