import React from 'react';
import StudentItems from '../../components/students/studentItems';

export default function Rooms() {
    const containerStyle = {
        display: 'flex',
    };

    const studentListStyle = {
        width: '30%',
        border: '1px solid #000',
        borderRadius: '10px',
        padding: '10px',
        marginRight: '10px',
    };

    return (
        <div style={containerStyle}>
            <div style={studentListStyle}>
                <h2>Students</h2>
                <StudentItems />
            </div>
        </div>
    );
}