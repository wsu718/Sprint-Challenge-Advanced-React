import React from 'react';
import Player from './Player';

const PlayerList = props => {

    return (
        <div className="playerList">
            {props.players.map(player => (
                <Player player={player} />
            ))}
        </div>
    )
}

export default PlayerList;

