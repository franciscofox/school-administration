import React from 'react';
import StudentDetails from '@/components/students/studentDetails';
import { containerStyle, listStyle, titleStyle } from '../../styles/containerListTitle';

export default function Student() {
    return (
        <div style={containerStyle}>
            <div style={listStyle}>
                <h2 style={titleStyle}>Student Details</h2>
                <StudentDetails />
            </div>
        </div>
    );
}