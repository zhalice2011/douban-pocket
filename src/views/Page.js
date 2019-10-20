import React, { Component } from 'react';
import Tabs from '../components/common/Tabs'
import ListView from '../components/common/ListView'
import SearchBox from '../components/common/SearchBox'
import fetchJSON from '../utils/fetch'

import TAB from '../constants/tab'

class Page extends Component {
    constructor (props) {
        super(props)
        const pathname = props.location.pathname
        let active = ''
        if (pathname === '/books') {
            active = TAB.BOOK
        }
        if (pathname === '/movies') {
            active = TAB.MOVIE
        }
        if (pathname === '/music') {
            active = TAB.MUSIC
        }
        this.active = active
        this.state = {
            items: []
        }
    }
    componentDidMount () {
        this.fetchData()
    }
    onChange = (search) => {
        this.fetchData(search)
    }
    fetchData (search) {
        const params = {}
        fetchJSON(this.active, search, params).then(data => {
            const items = data.result
            this.setState({ items })
        })
    }
    render() {
        const { items } = this.state
        return (
	        <div className="column-flex" style={{ height: '100%' }}>
                <SearchBox onChange={this.onChange} />
                <ListView items={items}/>
                <Tabs history={this.props.history} active={this.active}/>
            </div>
        );
    }
}

export default (props)=><Page {...props} key={props.location.pathname} />

