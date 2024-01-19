import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DeleteRoomButton from './deleteRoomButton';

export default function RoomItems({roomRefreshKey, setRoomRefreshKey}) {
    const [data, setData] = useState([]);

    const handleRoomDelete = () => {
        setRoomRefreshKey(oldKey => oldKey + 1);
    };

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
    }, [roomRefreshKey]);

    return (  
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px' }}>
            <div style={{ fontWeight: 'bold' }}>Room Name</div>
            <div style={{ fontWeight: 'bold' }}></div>

            {data.map((item) => (
                <React.Fragment key={item.id}>
                    <div><Link href={`/rooms/${item.id}`}>{item.name}</Link></div>
                    <DeleteRoomButton roomId={item.id} roomName={item.name} onRoomDelete={handleRoomDelete} />
                </React.Fragment>
            ))}
        </div>
    );
}