import React from 'react';
import RoomDetails from '../../components/rooms/roomDetails';
import StudentsInRoom from '@/components/students/studentsInRoom';
import { containerStyle, listStyle, titleStyle } from '../../styles/containerListTitle';

export default function Room() {
    return (
        <div style={containerStyle}>
            <div style={listStyle}>
                <h2 style={titleStyle}>Room Details</h2>
                <RoomDetails />
            </div>
            <div style={listStyle}>
                <h2 style={titleStyle}>Students in Room</h2>
                <StudentsInRoom />
            </div>
        </div>
    );
}