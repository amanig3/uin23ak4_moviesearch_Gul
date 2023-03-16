import './App.css'
import './style.css'
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async() =>{
    //Pass på at ID og KEY kommer fra riktig app i edmam, hvis dere har registrert at dere skal bruke recipe api så må app id og key være koblet til det og ikke food databse eller omvendt
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=df1a72d2`)
    const data = await response.json()
    console.log(data.Search)
    setMovies(data.Search)

  
  }
  useEffect(() =>{
    getMovies()
  },[])


  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
        </Route>
      </Routes>

  );
}

export default App;