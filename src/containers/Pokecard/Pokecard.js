import React from 'react';

class Pokecard extends React.Component {
    render(){
        const {name, type, base_experience} = this.props;
        return (
            <div className="tc bg-moon-gray dib pa3 ma2 grow bw2 shadow-5">
                {name}
                <br />
                {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${key}.png.`} alt={name}/>
                 */}
                 {type}
                <br />
                {base_experience}
                <br />
            </div>
        );
    }
}


export default Pokecard;