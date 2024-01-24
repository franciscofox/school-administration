import React from "react";
import SignUp from "../../components/authConfig/signup";
import { backdropStyle, containerStyle, inputStyle, buttonStyle } from "../../styles/loginStyle";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LogInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    };

    const handleSignUp = (username, password) => {
        SignUp(username, password);
        router.push("/");
    }
        
    return (
        <div style={backdropStyle}>
            <div style={containerStyle}>
            <input style={inputStyle} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button style={buttonStyle} onClick={() => handleSignUp(username, password)}>Sign Up</button>
            <button style={buttonStyle} onClick={handleCancel}>Cancel</button>
            </div>
        </div>
        );
}
