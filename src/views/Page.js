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
        this.page = 1
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
    handleGoBack = () => {
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

    fetchMoreData = () => {
        this.page = this.page + 1
        const params = { page: this.page, limit: 10 }
        fetchJSON(this.active, this.search, params).then(data => {
            const items = this.state.items.concat(data.result)
            this.setState({ items, isLoading: false })
        })
    }

    renderList = () => {
        const { items, isLoading, item } = this.state

        if (isLoading) {
            return (
                <div className="flex1 row-flex-center jc-center " style={{ minHeight: 0 }}>
                    <Loading />
                </div>
            )
        }

        if (items.length === 0) {
            return (
                <div className="flex1 row-flex-center jc-center "><span>暂无数据</span></div>
            )
        }

        return <ListView items={items} handleClick={this.handleClick} fetchMoreData={this.fetchMoreData}/>
    }

    render() {
        const { items, isLoading, item } = this.state
        return (
            <div className="p-relative full-content">
                <div className="column-flex p-absolute full-content" style={{ height: '100%', zIndex: 1 }}>
                    <SearchBox onChange={this.onChange} />
                    {this.renderList()}
                    <Tabs history={this.props.history} active={this.active}/>
                </div>
                {item && <PageDetails item={item} goBack={this.handleGoBack} />}
            </div>

        );
    }
}

export default (props)=><Page {...props} key={props.location.pathname} />

