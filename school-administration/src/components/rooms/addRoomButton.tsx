import React from 'react';
import { useState } from 'react';

const AddRoomButton = () => {
    const [message, setMessage] = useState('');

    const handleAddRoom = async () => {
    try {
        const roomName = 'New Room';
        const response = await addRoom('New Room');
        
        if (response.success) {
            setMessage(`Room created successfully!`);
            console.log('Room added:', response);
        } else {
            setMessage(`Failed to create room.`);
        }
        
    } catch (error) {
        console.error('Failed to add room:', error);
    }
    };

  return (
    <button onClick={handleAddRoom}>Add Room</button>
  );
};

export default AddRoomButton;

async function addRoom(roomName: string) {
    const response = await fetch(`http://localhost:4000/rooms/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: roomName,
            capacity: 10,
        }),
    });

    return await response.json();
}
