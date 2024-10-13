import {first151Pokemon, getFullPokedexNumber} from '../utils/data'

const SideNav = () => {
  return (
    <nav className='side-nav'>
      <input type="text" />
        {
          first151Pokemon.map((pokemon,pokemonIndex)=>(
            <button
             className={'nav-card'} 
             key={pokemonIndex}>
              <p>{getFullPokedexNumber(pokemonIndex)}</p>
              <p>{pokemon}</p></button>
          ))
        }
    </nav>
)
}

export default SideNav