import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const PlayerCard = ({ player }) => {

    const [isSelected, setIsSelected] = useState(false)
    // console.log(player)

    // {
    //     "playerName": "Virat Kohli",
    //     "playerCountry": "India",
    //     "playerType": "Batsman",
    //     "battingStyle": "Right-hand bat",
    //     "bowlingStyle": "Right-arm medium",
    //     "Price": 15000000,
    //     "rating": 9.8,
    //     "playerImg": "https://i.ibb.co/Vcy2kFb6/kholi.webp"
    // }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className='h-70'>
                    <img className='w-full'
                        src={player.playerImg}
                        alt={player.playerName} />
                </figure>
                <div className="card-body space-y-1">
                    <h2 className="card-title"><FaUser/>{player.playerName}</h2>
                    <div className='flex justify-between'>
                        <h3 className='flex gap-1 items-center'><FaFlag/>{player.playerCountry}</h3>
                        <h4>{player.playerType}</h4>
                    </div>
                    <hr className='text-gray-400 my-4'/>

                    <h3 className='font-bold'>Rating: {player.rating}</h3>
                    <h3 className='flex justify-between items-center font-semibold'><h4>{player.battingStyle}</h4><h4>{player.bowlingStyle}</h4></h3>
                    <div className="card-actions flex justify-between gap-4 items-center">
                        <h4 className='font-bold'>Price: ${player.Price}</h4>
                        <button onClick={()=>setIsSelected(true)} className="btn" disabled={isSelected}>{isSelected? "Selected": "Choose Players"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;