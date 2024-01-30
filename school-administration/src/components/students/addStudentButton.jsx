import React, { useState, useEffect } from 'react';
import { modalBackdropStyle, modalStyle, inputStyle} from '../../styles/addStudentButtonStyle';
import { Formik, Field, Form } from 'formik'; 
import * as Yup from 'yup'; 
import Button from '../common/Button';

const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    age: Yup.number().required('Required'),
    roomName: Yup.string().required('Required'),
    siblingId: Yup.string().nullable(),
});

const AddStudentButton = ({onStudentAdd}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');

    const [siblingOptions, setSiblingOptions] = useState([]);
    const [roomOptions, setRoomOptions] = useState([]);

    useEffect(() => {
        const fetchRoomOptions = async () => {
            try {
                const response = await fetch(`http://localhost:4000/rooms`);
                const data = await response.json();
                const roomNames = data.map(room => room.name);
                setRoomOptions(roomNames);
            } catch (error) {
                console.error('Failed to fetch room options:', error);
            }
        };

        const fetchSiblingOptions = async () => {
            try {
                const response = await fetch(`http://localhost:4000/students`);
                const data = await response.json();
                const siblingOptions = data.map(student => ({
                    name: student.firstName + ' ' + student.lastName,
                    id: student.id
                }));
                setSiblingOptions(siblingOptions);
            } catch (error) {
                console.error('Failed to fetch sibling options:', error);
            }
        }

        fetchRoomOptions();
        fetchSiblingOptions();
    }, []);

    const handleAddStudent = async (values) => {
        try {
            const response = await addStudent(values.firstName, values.lastName, values.age, values.roomName, values.siblingId);
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
            <Button onClick={() => setIsModalOpen(true)}>Add Student</Button>
            {isModalOpen && (
                <Modal
                    roomOptions={roomOptions}
                    siblingOptions={siblingOptions}
                    onSubmit={handleAddStudent}
                    onClose={() => setIsModalOpen(false)}
                    message={message}
                />
            )}
        </div>
    );
};

export default AddStudentButton;

const Modal = ({ roomOptions, siblingOptions, onSubmit, onClose }) => {
    return (
        <div style={modalBackdropStyle}>
            <div style={modalStyle}>
                <Formik
                    initialValues={{ firstName: '', lastName: '', age: '', roomName: '', siblingId: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        onSubmit(values);
                        onClose();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field style={inputStyle} type="text" name="firstName" placeholder="Enter first name" />
                            <Field style={inputStyle} type="text" name="lastName" placeholder="Enter last name" />
                            <Field style={inputStyle} type="number" name="age" placeholder="Enter age" />
                            <Field as="select" style={inputStyle} name="siblingId">
                                <option value="">Select a sibling (if applies)</option>
                                {siblingOptions && siblingOptions.map((sibling) => (
                                    <option key={sibling.id} value={sibling.id}>
                                        {sibling.name}
                                    </option>
                                ))}
                            </Field>
                            <Field as="select" style={inputStyle} name="roomName">
                                <option value="">Select a room</option>
                                {roomOptions && roomOptions.map((room) => (
                                    <option key={room} value={room}>
                                        {room}
                                    </option>
                                ))}
                            </Field>
                            <Button type="submit" disabled={isSubmitting}>Create</Button>
                            <Button  type="button" onClick={onClose}>Cancel</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

async function addStudent(firstName, lastName, age, roomName, siblingId) {
    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:4000/students/`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            age: parseInt(age),
            roomName: roomName,
            siblingId: parseInt(siblingId),
        }),
    });

    return await response.json();
}
