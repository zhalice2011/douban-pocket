import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TAB from '../../constants/tab'

const TABS = [
    {
        value: TAB.BOOK,
        content: '图书',
        path: '/books',
        icon: 'book'
    },
    {
        value: TAB.MOVIE,
        content: '电影',
        path: '/movies',
        icon: 'movie'
    },
    {
        value: TAB.MUSIC,
        content: '音乐',
        path: '/music',
        icon: 'music'
    },
]

class Tabs extends Component {
    static props = {
        active: PropTypes.string,
        history: PropTypes.object,
    }
    static defaultProps = {
        active: TAB.BOOK
    }

    onActiveChange (path) {
        this.props.history.push(path)
    }

    renderTab (opt, active) {
        const { value, content, icon, path } = opt
        const style = active === opt.value ? { color: 'red', borderRight: '1px solid #ddd' } : { borderRight: '1px solid #ddd' }
        return (
            <div
                key={value}
                className="column-flex flex1 align-center"
                style={style}
                onClick={() => this.onActiveChange(path)}
            >
                {content}
            </div>
        )
    }
    render() {
        const { active } = this.props
        return (
            <div
                className="row-flex"
                style={{ height: 50, lineHeight: '50px', borderTop: '1px solid #ddd' }}
            >
                {TABS.map(v => this.renderTab(v, active))}
            </div>
        );
    }
}

module.exports = Tabs;


