import React, { useState } from 'react';

const SearchStudents = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async (e) => {
        console.log(`Searching for: ${query}`);
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:4000/students/search?query=${query}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const searchResults = await response.json();
            onSearch(searchResults);
        } catch (error) {
            console.error('An error occurred while fetching the data.', error);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search students"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchStudents;