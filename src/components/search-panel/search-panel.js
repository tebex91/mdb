import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SearchPanel = ({ history }) => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            const query = searchQuery.trim().replace(/ /g,"+");
            history.push(`/search&q=${query}`);
            setSearchQuery('')}}>
            <input
                type="text"
                placeholder="find movie"
                value={ searchQuery }
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }} />
            <button type="submit">go!</button>
        </form>
    )
}

export default withRouter(SearchPanel);
