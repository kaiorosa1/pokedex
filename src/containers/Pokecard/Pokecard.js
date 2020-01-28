import React from 'react';
import './Pokecard.css';

const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;


class Pokecard extends React.Component {
    render(){
        const {id,name, type, base_experience} = this.props;
        let imgSrc = `${POKE_API}${id}.png`;
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