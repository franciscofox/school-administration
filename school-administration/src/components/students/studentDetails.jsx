import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function StudentDetails(props) {
    const [data, setData] = useState();
    const router = useRouter();
    const { studentId } = router.query;
    const { setSiblingGroupId } = props;

    useEffect(() => {
        if (!studentId) return;

        const fetchData = async () => {
            try {
                const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/students/${studentId}`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                setData(responseData);
                console.log('responseData', responseData);
                setSiblingGroupId(responseData.siblingGroupId);

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
