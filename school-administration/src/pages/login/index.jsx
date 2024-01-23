import React from "react";
import { backdropStyle, containerStyle, inputStyle, buttonStyle, signUpStyle } from "../../styles/loginStyle";
import { useRouter } from "next/router";
import LogIn from "../../components/authConfig/login";
import { useState } from "react";
import Link from 'next/link';

export default function LogInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    };

    const handleLogIn = async () => {
        try {
            const data = await LogIn(username, password);
            console.log('Login successful', data);
            router.push('/').then(() => window.location.reload());
        } catch (error) {
            console.error('Login failed:', error);
            alert(error.message || 'Error Logging In');
        }
    }
    

    return (
        <div style={backdropStyle}>
            <div style={containerStyle}>
                <input style={inputStyle} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button style={buttonStyle} onClick={() => handleLogIn(username, password)}>Log In</button>
                <button style={buttonStyle} onClick={handleCancel}>Cancel</button>
                <Link href="/signup" style={signUpStyle}>Sign Up</Link>
            </div>
        </div>
        );
}
