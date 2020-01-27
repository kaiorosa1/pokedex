import React from 'react';

class Pokecard extends React.Component {
    render(){
        const {name, type, base_experience} = this.props;
        return (
            <div className="Pokecard">
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