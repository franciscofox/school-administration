import React from 'react';
import StudentDetails from '@/components/students/studentDetails';

export default function Student() {
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
                <h2>Student Details</h2>
                <StudentDetails />
            </div>
        </div>
    );
}