import React from 'react';
import Player from './Player';

const PlayerList = props => {

    return (
        <div className="playerList">
            {props.players.map(player => (
                <Player player={player} key={player.id} />
            ))}
        </div>
    )
}

export default PlayerList;

