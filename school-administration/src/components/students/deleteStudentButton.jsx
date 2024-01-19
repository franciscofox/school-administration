import React from 'react';

const DeleteStudentButton = ({ studentId, firstName, lastName, onStudentDelete }) => {
    const handleDelete = async () => {
        const isConfirmed = window.confirm(`Are you sure you want to delete student ${firstName} ${lastName}?`);
        if (isConfirmed) {
            console.log(`Deleting student with ID: ${studentId}`);
            const response = await fetch(`http://localhost:4000/students/${studentId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                console.log(`Student with ID: ${studentId} deleted successfully.`);
                onStudentDelete();
            } else {
                console.error(`Failed to delete student with ID: ${studentId}.`);
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

export default DeleteStudentButton;