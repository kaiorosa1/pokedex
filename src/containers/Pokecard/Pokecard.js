import React from 'react';
import './Pokecard.css';

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

const padToThree = (number) =>{
    if(number < 999){
        return `00${number}`.slice(-3);
    }
    return number;
}
class Pokecard extends React.Component {
    render(){
        const {id,name, type, base_experience} = this.props;
        let imgSrc = `${POKE_API}${padToThree(id)}.png`;
        return (
            <div className="Pokecard tc bg-moon-gray dib pa3 ma2 grow bw2 shadow-5">
                <div className="Pokecard-card">
                    <h2 className="f3 blue">{name}</h2>
                    <div>
                        <img src={imgSrc} alt={name} />
                    </div>
                    <div>
                        Type: {type}
                    </div>
                    <div>
                    Exp: {base_experience}
                    </div>
                </div>
            </div>
        );
    }
}


export default Pokecard;