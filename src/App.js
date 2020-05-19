import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Searchbooks from './container/Search';
import axios from 'axios';
import Spinner from './components/Spinner';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  state = {
    books: [],
    loading: false,
    error: null
  };
  searchBooks = async key => {
    //alert(key);
    this.setState({ loading: true });
    const res = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=${key}&startIndex=0&maxResults=40'
    );
    this.setState({ books: res.data.items, loading: false });
  };
  render() {
    const { books, loading, error , key} = this.state;
    // const logo = 'Busque Books'
    return (
      <Router>
        <div>
         
          <div className="container">
            
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                     <Navbar searchBooks={this.searchBooks}
          books={books}
          loading={loading}/>
          <h3><center>#FIQUEEMCASA</center></h3>
                    <Searchbooks books={books} loading={loading}/>
                  </Fragment>
                )}
              />
              
            </Switch>
          </div>
        </div>
      </Router>

/*
      ------
      <div className="container">
        <div className="App">
        <Navbar searchBooks={this.searchBooks}
          books={books}
          loading={loading} />
        
        
        </div>
        <div className="search">
        
        <Route exact path="/Searchbooks" component={Searchbooks} render={props => (
          <Searchbooks books={books} loading={loading}/>
          )}
          />
          
        </div>
      </div>
      */
    );
  }
}

export default App;
