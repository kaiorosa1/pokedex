import React from 'react';
import Pokecard from '../Pokecard/Pokecard';

class Pokedex extends React.Component {
    render(){
        const cardArray = this.props.cards.map((card) => {
            return (
                    <div class="fl w-100 w-third-ns pa2">
                        <Pokecard key={card.id} 
                            name={card.name}
                            type={card.type} 
                            base_experience={card.base_experience}
                        />
                    </div>
            );
        })
        return cardArray;
        
    }
}


export default Pokedex;