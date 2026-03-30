import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise}) => {

    const [btnSelectedType, setBtnSelectedType] = useState("available");

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const players = use(playersPromise);
    // console.log(players)

    return (
        <div className='container mx-auto mt-4'>
            <div className='flex justify-between items-center gap-4 mb-4'>
                {btnSelectedType === "available" ?
                    <h2 className='font-bold text-2xl'>Available Players</h2>
                    : <h2 className='font-bold text-2xl'>Selected Player ({selectedPlayers.length}/6)</h2>
                }
                <div>
                    <button onClick={() => setBtnSelectedType("available")} className={`btn ${btnSelectedType === "available" ? 'bg-[#E7FE29]' : ""} rounded-xl rounded-r-none`}>Available</button>
                    <button onClick={() => setBtnSelectedType("selected")} className={`btn ${btnSelectedType === "selected" ? 'bg-[#E7FE29]' : ""} rounded-xl rounded-l-none`}>Selected</button>
                </div>
            </div>


            {btnSelectedType === "available" ?
                <AvailablePlayers players={players} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers>
                : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>
            }

        </div>
    );
};

export default Players;