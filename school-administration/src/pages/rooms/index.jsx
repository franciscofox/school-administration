import React from 'react';
import RoomItems from '../../components/rooms/roomItems';
import AddRoomButton from '../../components/rooms/addRoomButton';
import { useState } from 'react';
import { containerStyle, listStyle } from '../../styles/containerListTitle';

export default function Rooms() {
    const [roomRefreshKey, setRoomRefreshKey] = useState(0);

    const handleRoomAdded = () => {
        setRoomRefreshKey(oldKey => oldKey + 1);
    };

    return (
        <div style={containerStyle}>
            <div style={listStyle}>
                <h2>Rooms</h2>
                <RoomItems roomRefreshKey={roomRefreshKey} setRoomRefreshKey={setRoomRefreshKey} />
                <div style={{ display: 'flex', justifyContent: 'left', marginTop: '20px' }}></div>
                    <AddRoomButton onRoomAdd={handleRoomAdded} />
            </div>
        </div>
    );
}