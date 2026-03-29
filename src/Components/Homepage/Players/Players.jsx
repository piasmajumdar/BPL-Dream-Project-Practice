import React, { useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = () => {

    const [btnSelectedType, setBtnSelectedType] = useState("available")

    return (
        <div className='container mx-auto mt-4'>
            <div className='flex justify-between items-center gap-4'>
                {btnSelectedType === "available" ?
                    <h2 className='font-bold text-2xl'>Available Players</h2>
                    : <h2 className='font-bold text-2xl'>Selected Player (4/6)</h2>
                }
                <div>
                    <button onClick={() => setBtnSelectedType("available")} className={`btn ${btnSelectedType === "available" ? 'bg-[#E7FE29]' : ""} rounded-xl rounded-r-none`}>Available</button>
                    <button onClick={() => setBtnSelectedType("selected")} className={`btn ${btnSelectedType === "selected" ? 'bg-[#E7FE29]' : ""} rounded-xl rounded-l-none`}>Selected</button>
                </div>
            </div>


            {btnSelectedType === "available" ?
                <AvailablePlayers></AvailablePlayers>
                : <SelectedPlayers></SelectedPlayers>
            }

        </div>
    );
};

export default Players;