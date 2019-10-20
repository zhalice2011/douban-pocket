import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './SearchBox.css'

class SearchBox extends Component {
    static propTypes = {
        onChange: PropTypes.func,
    }
    constructor (props) {
        super(props)
        this.state = {
            search: ''
        }
    }
    onChange = (e) => {
        this.setState({ search: e.target.value })
    }
    applyChange = () => {
        const { onChange } = this.props
        onChange && onChange(this.state.search)
    }

    render() {
        const { search } = this.state
        return (
	        <div className="row-flex search-container">
                <input
                    value={search}
                    className="search-input"
                    onChange={this.onChange}
                />
                <div className="search-btn" onClick={this.applyChange}>搜索</div>
            </div>
        );
    }
}

module.exports = SearchBox


