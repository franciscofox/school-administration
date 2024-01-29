import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RoomDetails() {
    const [data, setData] = useState();
    const router = useRouter();
    const { roomId } = router.query;

    useEffect(() => {
        if (!roomId) return;

        const fetchData = async () => {

            try {
                const apiUrl = `http://ec2-18-224-135-214.us-east-2.compute.amazonaws.com:4000/rooms/${roomId}`;
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
    }, [roomId]); 
    
    if (!data) {
        return <div>Loading Room Data...</div>;
    }

    return (  
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
        <div>Name: {data.name}</div>
        <div>Capacity: {data.studentCount} / {data.capacity}</div>
    </div>
    );
}
