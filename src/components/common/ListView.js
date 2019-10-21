import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ListView.css'

class ListView extends Component {
    static propTypes = {
        items: PropTypes.array,
        handleClick: PropTypes.func
    }
    static defaultProps = {
        items: [],
    }
    renderItem (item) {
        const onClick = () => this.props.handleClick(item)
        return (
            <div onClick={onClick} key={item.id} className="row-flex bd list-item">
                <div className="list-image">
                    <img src={item.image} />
                </div>
                <div className="list-content">
                    {item.title}
                </div>
            </div>
        )
    }
    render() {
        const { items } = this.props
        return (
            <div
                className="column-flex flex1"
                style={{ padding: '10px', overflow: 'auto' }}
            >
                {items.map(item => this.renderItem(item))}
            </div>
        );
    }
}

module.exports = ListView;


