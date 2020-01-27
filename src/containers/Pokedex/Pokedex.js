import React from 'react';
import Pokecard from '../Pokecard/Pokecard';

class Pokedex extends React.Component {
    
    render(){
        return (
            <div>
                <Pokecard name="Charmander" type="fire" base_experience={62}/>
            </div>
        );
    }
}


export default Pokedex;