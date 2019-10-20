import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Books from './views/Books'
import Movies from './views/Movies'
import Music from './views/Music'
import NotFound from './views/NotFound'
import Page from './views/Page'
import './style.css';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
	        <div className="app" >
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Books} />
                        <Route path="/books" component={Page} />
                        <Route path="/movies" component={Page} />
                        <Route path="/music" component={Page} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
	        </div>
        );
    }
}

module.exports = App;


