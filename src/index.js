import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favorite from './container/Favorite';
import moreInfo from './container/moreInfo';
import * as serviceWorker from './serviceWorker';
import { HashRouter} from 'react-router-dom';
import {Router, Route, IndexRoute} from 'react-router';
import Searchbooks from './container/Search';

ReactDOM.render(
  
  <HashRouter>
    <Route path = "/" component = {App}/>
      <Route path = "/Favorite" component = {Favorite} />
      <Route path = "/Searchbooks" component = {Searchbooks} />
      <Route path = "/moreInfo" component = {moreInfo} />
    
    
</HashRouter>,
  //<Router history={hashHistory}></Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
