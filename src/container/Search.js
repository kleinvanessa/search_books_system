import React, { Component } from 'react';
import Infocard from '../components/InfoCard';

export default class Searchbooks extends Component {
    infoCardReleases = {
        title: 'Titulo do livro',
        text: 'Esta é a descrição do livro que aparece acima.',
        //moreInfo: () => alert('Saima MAIS +'),
        //favorite: () => alert('FAVORITOS')
    }
    render(){
        return(
            <div className="contaniner text-center">
                <div className="row">
                    <Infocard {...this.infoCardReleases}/>
                </div>
            </div>
        );
    }
};