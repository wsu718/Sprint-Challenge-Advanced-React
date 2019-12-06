import React from 'react';

const Player = props => {

    return (
        <div className="playerCard" data-testid="playerCard">
            <img width="50" src="https://image.flaticon.com/icons/svg/53/53283.svg" alt="soccerball"></img>
            <p>{props.player.name}</p>
            <p>{props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}

export default Player;

// { "name": "Alex Morgan", "country": "United States", "searches": 100, "id": 0 }
