import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DeleteStudentButton from './deleteStudentButton';
import { useAuth } from '../../context/AuthContext';

function StudentItems({studentRrefreshKey, setStudentRefreshKey, searchResults}) {
    const [data, setData] = useState([]);
    const { isSignedIn } = useAuth();

    const handleStudentDelete = () => {
        setStudentRefreshKey(oldKey => oldKey + 1);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searchResults !== undefined && searchResults.length > 0) {
                    setData(searchResults);
                    return;
                }

                const apiUrl = `http://localhost:4000/students/`;
                const response = await fetch(apiUrl);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                setData(responseData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [studentRrefreshKey, searchResults]);


    return (  
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '10px' }}>
            <div style={{ fontWeight: 'bold' }}>Student Name</div>
            <div style={{ fontWeight: 'bold' }}>Room Name</div>
            <div style={{ fontWeight: 'bold' }}></div>

            {data.map((item) => (
                <React.Fragment key={item.id}>
                    <div><Link href={`/students/${item.id}`}>{item.firstName} {item.lastName}</Link></div>
                    <div>{item.roomName}</div>
                    {isSignedIn ? (
                        <DeleteStudentButton studentId={item.id} firstName={item.firstName} lastName={item.lastName} onStudentDelete={handleStudentDelete} />
                    ) : (
                        <br />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default StudentItems;
