import React, { useState } from 'react';
import { modalBackdropStyle, modalStyle, inputStyle, buttonStyle, addButtonStyle } from '../../styles/addStudentButtonStyle';

const AddRoomButton = ({onRoomAdd}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roomName, setRoomName] = useState('');
    const [roomCapacity, setRoomCapacity] = useState('');
    const [message, setMessage] = useState('');

    const handleAddRoom = async () => {
        try {
            const response = await addRoom(roomName, roomCapacity);
            if (response) {
                setMessage('Room created successfully!');
                setIsModalOpen(false);
                onRoomAdd();
            } else {
                setMessage('Failed to create room.');
            }
        } catch (error) {
            console.error('Failed to add room:', error);
        }
    };

    return (
        <div>
            <button style={addButtonStyle} onClick={() => setIsModalOpen(true)}>Add Room</button>
            {isModalOpen && (
                <Modal
                    roomName={roomName}
                    setRoomName={setRoomName}
                    roomCapacity={roomCapacity}
                    setRoomCapacity={setRoomCapacity}
                    onSubmit={handleAddRoom}
                    onClose={() => setIsModalOpen(false)}
                    message={message}
                />
            )}
        </div>
    );
};

const Modal = ({ roomName, setRoomName, roomCapacity, setRoomCapacity, onSubmit, onClose }) => {
    const handleSubmit = () => {
        onSubmit();
        onClose();
    };

    return (
        <div style={modalBackdropStyle}>
            <div style={modalStyle}>
                <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter room name"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                />
                <input
                    style={inputStyle}
                    type="number"
                    placeholder="Enter room capacity"
                    value={roomCapacity}
                    onChange={(e) => setRoomCapacity(e.target.value)}
                />
                <button style={buttonStyle} onClick={handleSubmit}>Create</button>
                <button style={buttonStyle} onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default AddRoomButton;

async function addRoom(roomName, roomCapacity) {
    const token = localStorage.getItem('token');

    const response = await fetch(`https://ec2-18-188-55-5.us-east-2.compute.amazonaws.com:4000/rooms/`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
            name: roomName,
            capacity: parseInt(roomCapacity),
        }),
    });

    return await response.json();
}
