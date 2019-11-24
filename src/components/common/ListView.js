import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ListView.css'

class ListView extends Component {
    static propTypes = {
        items: PropTypes.array,
        handleClick: PropTypes.func,
        fetchMoreData: PropTypes.func,
    }
    static defaultProps = {
        items: [],
    }
    
    listRef = React.createRef()

    handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = this.listRef.current
        if (scrollTop + clientHeight > scrollHeight - 1) {
            this.props.fetchMoreData && this.props.fetchMoreData()
        }
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
                onScroll={this.handleScroll}
                ref={this.listRef}
            >
                {items.map(item => this.renderItem(item))}
            </div>
        );
    }
}

module.exports = ListView;


