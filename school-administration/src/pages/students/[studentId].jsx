import React from 'react';
import StudentDetails from '@/components/students/studentDetails';
import { containerStyle, listStyle, titleStyle } from '../../styles/containerListTitle';
import Siblings from '@/components/students/siblings';
import { useState } from 'react';

export default function Student() {
    const [siblingGroupId, setSiblingGroupId] = useState();

    return (
        <div style={containerStyle}>
            <div style={listStyle}>
                <h2 style={titleStyle}>Student Details</h2>
                <StudentDetails setSiblingGroupId={setSiblingGroupId}/>
            </div>
            <div style={listStyle}>
                <h2 style={titleStyle}>Siblings</h2>
                <Siblings siblingGroupId={siblingGroupId} />
            </div>
        </div>
    );
}
