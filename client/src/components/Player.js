import React from 'react';

const Player = props => {

    return (
        <div>
            <p>{props.player.name}</p>
            <p>{props.player.country}</p>
            <p>{props.player.searches}</p>
        </div>
    )
}

export default Player;

// { "name": "Alex Morgan", "country": "United States", "searches": 100, "id": 0 }
