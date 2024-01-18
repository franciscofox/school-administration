import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Room {
    id: number;
    name: string;
    capacity: number;
    isAvailable: boolean;
}

export default function RoomDetails() {
    const [data, setData] = useState<Room[]>();
    const router = useRouter();
    const { roomId } = router.query;

    useEffect(() => {
        if (!roomId) return;

        const fetchData = async () => {
            try {
                const apiUrl = `http://localhost:4000/rooms/${roomId}`;
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
        <div>Capacity: {data.capacity}</div>
        <div>Is Available: {data.isAvailable ? 'Yes' : 'No'}</div>
        {/* Add more properties as needed */}
    </div>
    );
}
