import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Siblings({siblingGroupId}) {
    const [data, setData] = useState();

    useEffect(() => {
        if (!siblingGroupId) return;

        const fetchData = async () => {
            try {
                const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/students/${siblingGroupId}/siblings`;
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
    }, [siblingGroupId]); 
    
    if (!data) {
        return <div>Loading Siblings...</div>;
    }

    return (  
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
            {data.map((student, index) => (
                <Link href={`/students/${student.id}`} key={index}><div>{student.firstName} {student.lastName}</div></Link>
            ))}
        </div>
    );
}

