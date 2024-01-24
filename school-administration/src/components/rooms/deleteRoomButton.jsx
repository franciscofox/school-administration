import React from 'react';

const DeleteRoomButton = ({ roomId, name, onRoomDelete }) => {
    const handleDelete = async () => {
        const isConfirmed = window.confirm(`Are you sure you want to delete room ${name}?`);
        const token = localStorage.getItem('token');
        if (isConfirmed) {
            console.log(`Deleting room with ID: ${roomId}`);
            const response = await fetch(`https://ec2-18-188-55-5.us-east-2.compute.amazonaws.com:4000/rooms/${roomId}`, {
                method: 'DELETE',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
            });
            if (response.ok) {
                console.log(`Room with ID: ${roomId} deleted successfully.`);
                onRoomDelete();
            } else {
                console.error(`Failed to delete room with ID: ${roomId}.`);
            }
        }
    };

    return (
        <button 
            onClick={handleDelete}
            style={{ 
                backgroundColor: 'red', 
                color: 'white', 
                width: '15px', 
                height: '15px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer',
            }}
        >
            -
        </button>
    );
};

export default DeleteRoomButton;
