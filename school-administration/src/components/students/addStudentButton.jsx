import React, { useState, useEffect } from 'react';
import { modalBackdropStyle, modalStyle, inputStyle, buttonStyle, addButtonStyle } from '../../styles/addStudentButtonStyle';

const AddStudentButton = ({onStudentAdd}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [roomName, setRoomName] = useState('');
    const [message, setMessage] = useState('');

    const [roomOptions, setRoomOptions] = useState([]);

    useEffect(() => {
        const fetchRoomOptions = async () => {
            try {
                const response = await fetch('http://localhost:4000/rooms');
                const data = await response.json();
                const roomNames = data.map(room => room.name);
                setRoomOptions(roomNames);
            } catch (error) {
                console.error('Failed to fetch room options:', error);
            }
        };

        fetchRoomOptions();
    }, []);

    const handleAddStudent = async () => {
        try {
            const response = await addStudent(firstName, lastName, age, roomName);
            if (response) {
                setMessage('Student created successfully!');
                setIsModalOpen(false);
                onStudentAdd();
            } else {
                setMessage('Failed to create room.');
            }
        } catch (error) {
            console.error('Failed to add room:', error);
        }
    };

    return (
        <div>
            <button style={addButtonStyle} onClick={() => setIsModalOpen(true)}>Add Student</button>
            {isModalOpen && (
                <Modal
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    age={age}
                    setAge={setAge}
                    roomName={roomName}
                    setRoomName={setRoomName}
                    roomOptions={roomOptions}
                    onSubmit={handleAddStudent}
                    onClose={() => setIsModalOpen(false)}
                    message={message}
                />
            )}
        </div>
    );
};
export default AddStudentButton;

const Modal = ({    firstName, setFirstName, 
                    lastName, setLastName, 
                    age, setAge, 
                    roomName, setRoomName,
                    roomOptions, 
                    onSubmit, 
                    onClose, 
                    message }) => {
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
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    style={inputStyle}
                    type="number"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value, 10))}
                />
                <select style={inputStyle} value={roomName} onChange={(e) => setRoomName(e.target.value)}>
                    {roomOptions && roomOptions.map((room) => (
                        <option key={room} value={room}>
                            {room}
                        </option>
                    ))}
                </select>
    
                <button style={buttonStyle} onClick={handleSubmit}>Create</button>
                <button style={buttonStyle} onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

async function addStudent(firstName, lastName, age, roomName) {
    const response = await fetch(`http://localhost:4000/students/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            age: parseInt(age),
            roomName: roomName,
        }),
    });

    return await response.json();
}