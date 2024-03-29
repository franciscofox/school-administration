import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import DeleteRoomButton from './deleteRoomButton';
import { useAuth } from '../../context/AuthContext';

export default function RoomItems({roomRefreshKey, setRoomRefreshKey, searchResults}) {
    const [data, setData] = useState([]);
    const { isSignedIn } = useAuth();

    const handleRoomDelete = () => {
        setRoomRefreshKey(oldKey => oldKey + 1);
    };

    const fetchData = useCallback(async () => {
        try {
            if (searchResults !== undefined && searchResults.length > 0) {
                setData(searchResults);
                return;
            }

            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/rooms/`;
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            setData(responseData);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [searchResults]);

    useEffect(() => {
        fetchData();
    }, [roomRefreshKey, searchResults, fetchData]);

    return (  
        <div className="room-items-container">
            <div className="room-items-header">Room Name</div>
            <div className="room-items-header"></div>

            {data.map((item, index) => (
                <React.Fragment key={item.id}>
                    <div><Link href={`/rooms/${item.id}`}>{item.name}</Link></div>
                    {isSignedIn ? (
                        <DeleteRoomButton roomId={item.id} roomName={item.name} onRoomDelete={handleRoomDelete} />
                    ) : (
                        index < data.length - 1 && <br />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
