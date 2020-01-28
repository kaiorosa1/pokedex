import React from 'react';
import Pokecard from '../Pokecard/Pokecard';

class Pokedex extends React.Component {
    render(){
        const cardArray = this.props.cards.map((card,i) => {
            return (
                    <div className="fl w-100 w-third-ns pa2">
                        <Pokecard key={i} 
                            id={card.id}
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