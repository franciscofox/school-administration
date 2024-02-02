import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LogOutPage() {
    const { logOut } = useAuth();

    useEffect(() => {
        logOut();
        window.location.href = '/';
    }, []);

    return null;
}
