import React from 'react';
const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
class Pokecard extends React.Component {
    render(){
        const {id,name, type, base_experience} = this.props;
        let imgSrc = `${POKE_API}${id}.png`;
        return (
            <div className="tc bg-moon-gray dib pa3 ma2 grow bw2 shadow-5">
                <span className="f3 blue">{name}</span>
                <br />
                <div>
                    <img src={imgSrc} alt={name} />
                </div>
                {type}
                <br />
                {base_experience}
                <br />
            </div>
        );
    }
}


export default Pokecard;