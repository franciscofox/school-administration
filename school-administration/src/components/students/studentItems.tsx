import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Student {
    id: number;
    firstName: string;
    lastName: number;
    age: number;
}

function StudentItems() {
    const [data, setData] = useState<Student[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 'http://localhost:4000/students/';
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
    }), [];


    return (  
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {data.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div><Link href={`/students/${item.id}`}>{item.firstName} {item.lastName}</Link></div>
                    <div>{item.age}</div>
                </div>
            ))}
        </div>
    );
}

export default StudentItems;