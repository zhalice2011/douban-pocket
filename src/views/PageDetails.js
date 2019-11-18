import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './PageDetails.css'

class PageDetails extends Component {
    static propTypes = {
        item: PropTypes.object,
        goBack: PropTypes.func,
    }
    renderBookDetails () {

    }
    renderMovieDetails () {

    }
    renderMusicDetails () {

    }

    render() {
        const { item, goBack } = this.props
        const { image, title, author, publisher, summary, catalog } = item
        return (
            <div className="detail-container">
                <div className="detail-header">
                    <div onClick={goBack} className="detail-header-back">{'< '}图书</div>
                    腾讯传
                </div>
                <div className="detail-banner">
                    <img src={image}/>
                    <div className="detail-desc">
                        <div>
                            <span>名称:</span>{title}
                        </div>
                        <div>
                            <span>作者:</span>{author && author.join('、')}
                        </div>
                        <div>
                            <span>出版社:</span>{publisher}
                        </div>
                    </div>
                </div>

                <div>
                    概述: {summary}
                </div>
                <div>
                    序言: {catalog}
                </div>
            </div>
        );
    }
}

export default PageDetails
