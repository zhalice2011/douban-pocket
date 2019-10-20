import React, { Component } from 'react';
import Tabs from '../components/common/Tabs'
import ListView from '../components/common/ListView'
import SearchBox from '../components/common/SearchBox'
import fetchJSON from '../utils/fetch'

import TAB from '../constants/tab'

class Books extends Component {
    constructor (props) {
        super(props)
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
        fetchJSON(TAB.BOOK, search, params).then(data => {
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
                <Tabs history={this.props.history} active={TAB.BOOK}/>
            </div>
        );
    }
}

module.exports = Books;


