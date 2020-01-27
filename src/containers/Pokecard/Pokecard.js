import React from 'react';

class Pokecard extends React.Component {
    render(){
        const {name, type, base_experience} = this.props;
        return (
            <div className="Pokecard tc bg-moon-gray dib pa3 ma2 grow bw2 shadow-5">
                {name}
                <br />
                {type}
                <br />
                {base_experience}
                <br />
            </div>
        );
    }
}


export default Pokecard;