import React from 'react';
import {Link} from 'react-router-dom';

const Infocard = (props) => {
    return(
<div className="container">     
    <div className="col-12 col-sm-4">
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://ideiasradicais.com.br/wp-content/uploads/2019/07/maskarad-1200x799.jpg"  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <Link to='/moreInfo' className="btn btn-dark" onClick={props.moreInfo}>Saiba mais +</Link>
                    <a>  </a>
                    <a href="#" className="btn btn-outline-danger btn-sm" onClick={props.favorite}>Favorito</a>
                </div>
        </div>

    </div>
</div>
    );
};

export default Infocard;