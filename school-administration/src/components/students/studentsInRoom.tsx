import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Student {
    id: number;
    firstName: string;
    lastName: number;
    age: number;
    roomName: string;
}

export default function StudentInRoom() {
    const [data, setData] = useState<Student[]>();
    const router = useRouter();
    const { roomId } = router.query;

    useEffect(() => {
        if (!roomId) return;

        const fetchData = async () => {
            try {
                const apiUrl = `http://localhost:4000/rooms/${roomId}/students`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                setData(responseData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [roomId]); 
    
    if (!data) {
        return <div>Loading Students...</div>;
    }

    return (  
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            {data.map((student, index) => (
                <Link href={`/students/${student.id}`}><div key={index}>{student.firstName} {student.lastName}</div></Link>
            ))}
        </div>
    );
}
