import React from 'react';
import RoomItems from '../../components/rooms/roomItems';
import AddRoomButton from '../../components/rooms/addRoomButton';
import SearchRooms from '../../components/rooms/searchRooms';
import { useState } from 'react';
import { containerStyle, listStyle } from '../../styles/containerListTitle';
import { checkAuth } from '@/components/authConfig/checkAuth';

export default function Rooms() {
    const [roomRefreshKey, setRoomRefreshKey] = useState(0);
    const [searchResults, setSearchResults] = useState([]);

    const handleRoomAdded = () => {
        setRoomRefreshKey(oldKey => oldKey + 1);
    };

    const handleSearch = (newSearchResults) => {
        setSearchResults(newSearchResults);
    };

    return (
        <div style={containerStyle}>
            <div style={listStyle}>
                <h2>Rooms</h2>
                <SearchRooms onSearch={handleSearch} />
                <RoomItems roomRefreshKey={roomRefreshKey} setRoomRefreshKey={setRoomRefreshKey} searchResults={searchResults} />
                {checkAuth() && (
                    <div style={{ display: 'flex', justifyContent: 'left', marginTop: '20px' }}>
                        <AddRoomButton onRoomAdd={handleRoomAdded} />
                    </div>
                )}
            </div>
        </div>
    );
}
