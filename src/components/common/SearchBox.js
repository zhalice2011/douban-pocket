import React, { useState, Component } from 'react';
import PropTypes from 'prop-types'
import './SearchBox.css'

function SearchBox ({ onChange }) {
    const [ search, setSearch ] = useState('')

    const applyChange = () => {
        onChange && onChange(search)
    }

    return (
        <div className="row-flex search-container">
            <input
                value={search}
                className="search-input"
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="search-btn" onClick={applyChange}>搜索</div>
        </div>
    )
}

export default SearchBox


