import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"


export default function SideNav(props) {
    const { selectedPokemon, setSelectedPokemon, handleCloseMenu, sideMenuHidden } = props

    const [searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((element, elementIndex) => {
        // if full pokedex number includes the current search value, return true
        if((getFullPokedexNumber(elementIndex)).includes(searchValue.toLowerCase()))
             { return true }

        // if the pokemon name includes the current search value, return true
        if(element.toLowerCase().includes(searchValue.toLowerCase())) 
        { return true }

        // otherwise, exclude valuue from the array
        return false

    })

    return (
        <nav className={' ' + (!sideMenuHidden ? "open" : '' )}> 
            <div className={"header" + (!sideMenuHidden ? " open" : '' )}>
                <button onClick={handleCloseMenu} className="open-nav-button">
                    <i className="fa-solid fa-left-long"></i>
                </button>
                <h1 className="text-gradient">
                    PokéNex 
                    <img src="/images/pokeball.png" alt="Pokéball" className="header-image"/>
                    
                </h1> 

            </div>
            <input placeholder="Eg: 001 or Bulba..." value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
                 
            }}/>
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokedexNumber = first151Pokemon.indexOf(pokemon) //Needed because pokemonIndex here comes from the filtered list, not the full one.
                return(
                    <button onClick={() => {
                        setSelectedPokemon(truePokedexNumber)
                        handleCloseMenu()
                        //window.scrollTo(0, 0)
                    }} key={pokemonIndex} className={'nav-card ' + (pokemonIndex === selectedPokemon ? 'nav-card-selected' : ' ')}>
                        <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}

        </nav>
    )
}