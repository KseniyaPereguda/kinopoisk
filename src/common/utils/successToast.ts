import toast from 'react-hot-toast';

export const successToast = (message: string) => {
    toast.success(message, {
        duration: 3000,
        position: 'top-right',
        style: {
            background: '#10b981',
            color: '#ffffff',
        },
        icon: '✅',
    });
};