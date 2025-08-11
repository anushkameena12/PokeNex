import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/SideNav"
import { useState } from "react"


function App() {
  const[selectedPokemon, setSelectedPokemon] = useState(0)

  const [sideMenuHidden, setSideMenuHidden] = useState(true) 


  function handleToggleMenu(){
    setSideMenuHidden(!sideMenuHidden)
  }

  function handleCloseMenu(){
    setSideMenuHidden(true)
  }

  return (
    <>
    <Header handleToggleMenu={handleToggleMenu} />
    <SideNav selectedPokemon = {selectedPokemon} setSelectedPokemon={setSelectedPokemon} handleCloseMenu={handleCloseMenu} sideMenuHidden={sideMenuHidden} />
    <PokeCard selectedPokemon = {selectedPokemon} />
    </>
      
  )
}

export default App