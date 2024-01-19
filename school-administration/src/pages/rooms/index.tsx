import React from 'react';
import RoomItems from '../../components/rooms/roomItems';

export default function Rooms() {
    const containerStyle = {
        display: 'flex',
    };

    const roomListStyle = {
        width: '30%',
        border: '1px solid #000',
        borderRadius: '10px',
        padding: '10px',
        marginRight: '10px',
    };

    return (
        <div style={containerStyle}>
            <div style={roomListStyle}>
                <h2>Rooms</h2>
                <RoomItems />
                <button style={{ marginTop: '10px' }} onClick={() => console.log('Add new room')}>Add New Room</button>
            </div>
        </div>
    );
}