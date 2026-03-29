import React from 'react';
import PlayerCard from '../../../ui/PlayerCard';

const AvailablePlayers = ({ players }) => {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    players.map((player, index) => <PlayerCard key={index} player={player}></PlayerCard>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;