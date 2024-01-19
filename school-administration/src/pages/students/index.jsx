import React from 'react';
import StudentItems from '../../components/students/studentItems';
import AddStudentButton from '../../components/students/addStudentButton';
import { useState } from 'react';
import { containerStyle, listStyle, titleStyle } from '../../styles/containerListTitle';

export default function Students() {
    const [studentRrefreshKey, setStudentRefreshKey] = useState(0);

    const handleStudentAdded = () => {
        setStudentRefreshKey(oldKey => oldKey + 1);
    };

    return (
        <div style={containerStyle}>
            <div style={listStyle}>
                <h2 style={titleStyle}>Students</h2>
                <StudentItems studentRrefreshKey={studentRrefreshKey} setRefreshKey={setStudentRefreshKey} />
                <div style={{ display: 'flex', justifyContent: 'left', marginTop: '20px' }}>
                    <AddStudentButton onStudentAdd={handleStudentAdded} />
                </div>
            </div>
        </div>
    );
    
}