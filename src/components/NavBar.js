import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import Searchbooks from '../container/Search';
import Spinner from './Spinner';

export class NavBar extends Component {
    state = {
        key: ""
    };
    static propTypes = {
        searchBooks: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
    };
    onChange = e => {
        this.setState({ key: e.target.value });
      };
    findBook = e => {
        e.preventDefault();
       // if (!/\S/.test(this.state.text)) {
         // this.props.setAlert("Please enter something", "danger");
        //} else {
            
           
          this.props.searchBooks(this.state.key);
         // return <Searchbooks books={this.books} loading={this.loading} />;

        //  alert(this.state.loading);
         // return <Searchbooks key={this.state.key}/>;
         
          //this.setState({ key: "" });
          //if (1==1) {
            //return <Spinner />;
          //}
          
          
          
       // }
      };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark color-nav">
                <Link to='/' classNameName="navbar-brand" href="#">Busque Books</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link to='/about' className="nav-link" href="#">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Favorite' className="nav-link" href="#">Favoritos</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" name="key" placeholder="Buscar" onChange={this.onChange}  value={this.state.key} aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={this.findBook}>Buscar</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavBar;