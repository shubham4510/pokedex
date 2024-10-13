import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/SideNav"


import './App.css'

const App = () => {
  return (
    <div className="main">
      <div className="container">
      <Header/>
    <SideNav/>
    <PokeCard/>
      </div>
    </div>
  )
}

export default App