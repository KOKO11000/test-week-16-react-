import { useState } from 'react'
import './App.css'
import Terrorists from './Terrorists.jsx'
import SearchBar from './SearchBar.jsx'
import ShowTerrorist from './ShowTerrorist.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <SearchBar />
    
    <ShowTerrorist />
      {/* <Terrorists /> */}
    </div>
  )
}

export default App
