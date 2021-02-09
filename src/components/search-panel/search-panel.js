import React, { useState } from 'react';

const SearchPanel = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <form onSubmit={ (e) => {
            e.preventDefault()}}>
            <input
                type="text"
                placeholder="enter movie title"
                value={ searchQuery }
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    console.log(searchQuery);
                }} />
            <button type="submit">go!</button>
        </form>
    )
}

export default SearchPanel
