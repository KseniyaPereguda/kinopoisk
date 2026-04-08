import toast from 'react-hot-toast';

export const errorToast = (message: string, error?: unknown) => {
    toast.error(message, {
        duration: 4000,
        position: 'top-right',
    });

    if (error) {
        console.error(`${message}\n`, error);
    }
}
