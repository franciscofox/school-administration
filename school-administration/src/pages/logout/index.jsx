import { useEffect } from 'react';

export default function LogOut() {
    useEffect(() => {
        localStorage.removeItem('token');
        window.history.back();
        window.location.reload();
    }, []);

    return null;
}
