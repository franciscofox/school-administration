import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Student {
    id: number;
    firstName: string;
    lastName: number;
    age: number;
    roomName: string;
}


export default function StudentDetails() {
    const [data, setData] = useState<Student[]>();
    const router = useRouter();
    const { studentId } = router.query;

    useEffect(() => {
        if (!studentId) return;

        const fetchData = async () => {
            try {
                const apiUrl = `http://localhost:4000/students/${studentId}`;
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
    }, [studentId]); 
    
    if (!data) {
        return <div>No data</div>;
    }
 
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            <div>ID: {data.id}</div>
            <div>First Name: {data.firstName}</div>
            <div>Last Name: {data.lastName}</div>
            <div>Age: {data.age}</div>
            <div>Room: {data.roomName}</div>
        </div>
    );
}
