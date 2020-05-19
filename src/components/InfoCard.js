import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const Infocard = ({ book }) => {
    const {
        imageLinks,
        title,
        authors,
        publisher,
        publishedDate,
        description,
        pageCount,
        categories,
        previewLink
      } = book;
    return(
<div className="container">   
<div class="row">  
    <div className="col-12 col-sm-4">
        <div className="card">
            <img className="card-img-top" src={ imageLinks?.thumbnail} alt="Book Image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {authors}</p>
                    <Link to='/moreInfo' className="btn btn-dark" >Saiba mais +</Link>
                    <a>  </a>
                    <a href="#" className="btn btn-outline-danger btn-sm" >Favorito</a>
                </div>
                </div>
        </div>

    </div>
</div>
    );
};

Infocard.propTypes = {
    book: PropTypes.object.isRequired
  };
export default Infocard;