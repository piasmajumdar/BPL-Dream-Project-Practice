const SelectedPlayers = ({selectedPlayers, setSelectedPlayers}) => {
    console.log(selectedPlayers);

    const handleDelete = (player)=>{
            const filterPlayers = selectedPlayers.filter(selectedPlayer=> selectedPlayer.playerName != player.playerName)
            setSelectedPlayers(filterPlayers);
        }

    return (
        
        <div>
            {selectedPlayers.map(player=> {
                return <div className="border border-red-400 p-4">
                    <li>{player.playerName}</li>
                    <button onClick={()=>handleDelete(player)} className="btn btn-error">Delete</button>
                </div>
            })}
        </div>
    );
};

export default SelectedPlayers;