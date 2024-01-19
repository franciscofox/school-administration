import React from 'react';
import StudentItems from '../../components/students/studentItems';
import AddStudentButton from '../../components/students/addStudentButton';
import SearchStudents from '../../components/students/searchStudents';
import { useState } from 'react';
import { containerStyle, listStyle, titleStyle } from '../../styles/containerListTitle';

export default function Students() {
    const [studentRrefreshKey, setStudentRefreshKey] = useState(0);
    const [searchResults, setSearchResults] = useState([]);

    const handleStudentAdded = () => {
        setStudentRefreshKey(oldKey => oldKey + 1);
    };

    const handleSearch = (newSearchResults) => {
        setSearchResults(newSearchResults);
    };

    return (
        <div style={containerStyle}>
            <div style={listStyle}>
                <h2 style={titleStyle}>Students</h2>
                <SearchStudents onSearch={handleSearch} />
                <div style={{ display: 'flex', justifyContent: 'left', marginTop: '20px' }}>
                <StudentItems studentRrefreshKey={studentRrefreshKey} setRefreshKey={setStudentRefreshKey} searchResults={searchResults}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'left', marginTop: '20px' }}>
                    <AddStudentButton onStudentAdd={handleStudentAdded} />
                </div>
            </div>
        </div>
    );
    
}