import React from 'react';

const Spinner = () => {
    return (
        <div className="container text-center">
            <div className="spinner-border"  role="status">
                <span className="sr-only" >Carregando...</span>
            </div>
        </div>
    );
}
export default Spinner;