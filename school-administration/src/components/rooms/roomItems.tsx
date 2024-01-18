import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Room {
    id: number;
    name: string;
    capacity: number;
}

export default function RoomItems() {
    const [data, setData] = useState<Room[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 'http://localhost:4000/rooms/';
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
    }), [];


    return (  
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {data.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div><Link href={`/rooms/${item.id}`}>{item.name}</Link></div>
                    <div>{item.capacity}</div>
                </div>
            ))}
        </div>
    );
}