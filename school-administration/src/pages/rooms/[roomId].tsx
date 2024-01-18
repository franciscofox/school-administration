import React from 'react';
import RoomDetails from '../../components/rooms/roomDetails';

export default function Room() {
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
                <h2>Room Details</h2>
                <RoomDetails />
            </div>
        </div>
    );
}