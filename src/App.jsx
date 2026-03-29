import './App.css'
import Banner from './Components/Homepage/Banner/Banner'
import Players from './Components/Homepage/Players/Players'
import Navbar from './Components/Navbar/Navbar'

const getPlayersPromise = async() =>{
  const res = await fetch("data.json");
  return res.json();
}
const playersPromise = getPlayersPromise();

function App() {
  
  return (
    <>
    <Navbar/>
    <Banner/>
    
    <Players playersPromise={playersPromise}></Players>
    </>
  )
}

export default App
