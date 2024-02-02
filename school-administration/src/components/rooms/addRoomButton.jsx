import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { modalBackdropStyle, modalStyle, inputStyle} from '../../styles/addStudentButtonStyle';
import Button from '../common/Button';

const validationSchema = Yup.object({
    roomName: Yup.string().required('Required'),
    roomCapacity: Yup.number().required('Required'),
  });

const AddRoomButton = ({onRoomAdd}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleAddRoom = async (roomName, roomCapacity) => {
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
            <Button onClick={() => setIsModalOpen(true)}>Add Room</Button>
            {isModalOpen && (
                <Modal
                    onSubmit={handleAddRoom}
                    onClose={() => setIsModalOpen(false)}
                    message={message}
                />
            )}
        </div>
    );
};

const Modal = ({ onSubmit, onClose }) => {
    return (
        <div style={modalBackdropStyle}>
            <div style={modalStyle}>
                <Formik
                    initialValues={{ roomName: '', roomCapacity: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        onSubmit(values.roomName, values.roomCapacity);
                        onClose();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field style={inputStyle} type="text" name="roomName" placeholder="Enter room name" />
                            <Field style={inputStyle} type="number" name="roomCapacity" placeholder="Enter room capacity" />
                            <Button type="submit" disabled={isSubmitting}>Create</Button>
                            <Button type="button" onClick={onClose}>Cancel</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddRoomButton;

async function addRoom(roomName, roomCapacity) {
    const token = localStorage.getItem('token');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/`, {
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
