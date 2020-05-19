import React, { Component } from 'react';
import Infocard from '../components/InfoCard';
import PropTypes from "prop-types";
import Spinner from "../components/Spinner";


  

const Searchbooks = ({ loading, books }) => {
    if (loading) {
      return <Spinner />;
    }
        return(

<div className="contaniner text-center">

      {books && books.length > 0 && (
        <div className="books">
          {books.map(book => (
            <Infocard key={book.id} book={book.volumeInfo}/>
               //key={book.id} book={book.volumeInfo} />
          ))}
        </div>
      )}
      {!books && (
        <div className="books">
          <p className="lead text-center">
            Sorry
            <span role="img" aria-label="cry emoji">
              😪
            </span>
            . No search results found. Try something else.
          </p>
        </div>
      )}
    </div>


           
       
                    
        );
    
};
Searchbooks.propTypes = {
    loading: PropTypes.bool.isRequired,
    books: PropTypes.array.isRequired,
    key: PropTypes.string.isRequired
  };
export default Searchbooks;