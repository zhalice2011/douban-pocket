import React, { Component } from 'react';
import Tabs from '../components/common/Tabs'
import ListView from '../components/common/ListView'
import SearchBox from '../components/common/SearchBox'
import Loading from '../components/common/Loading'
import PageDetails from './PageDetails'

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
            isLoading: false, 
            items: [],
            item: null,
        }
    }
    componentDidMount () {
        this.fetchData()
    }
    onChange = (search) => {
        this.fetchData(search)
    }
    handleClick = (item) => {
        this.setState({ item })
    }
    handleClickBack = () => {
        this.setState({ item: null })
    }
    fetchData (search) {
        this.setState({ isLoading: true })
        const params = {}
        fetchJSON(this.active, search, params).then(data => {
            const items = data.result
            this.setState({ items, isLoading: false })
        })
    }
    render() {
        const { items, isLoading, item } = this.state
        return (
            <div className="page-container">
                <div className="column-flex list-container" style={{ height: '100%' }}>
                    <SearchBox onChange={this.onChange} />
                    {isLoading && <div className="row-flex-center flex1"><Loading /></div>}
                    {!isLoading && items && items.length === 0 && <div className='row-flex-center flex1' style={{ textAlign: 'center' }}>暂无数据</div>}
                    {!isLoading && items && items.length > 0 && <ListView items={items} handleClick={this.handleClick}/> }
                    <Tabs history={this.props.history} active={this.active}/>
                </div>
                {
                    item && 
                        <div className="detail-container">
                            <PageDetails item={item} onBack={this.handleClickBack}/>
                        </div>
                } 
            </div>
	        
        );
    }
}

export default (props)=><Page {...props} key={props.location.pathname} />

