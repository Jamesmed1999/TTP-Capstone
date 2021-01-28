import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'
import './index.css'

const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a65f9b291a589567b929f15ba75cf51a&query=";
const search = "https://api.themoviedb.org/3/search/movie?api_key=a65f9b291a589567b929f15ba75cf51a&query="


function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearch] = useState('')

  useEffect(() => {
    getMovies(url)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }


  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      getMovies(search + searchTerm)
      setSearch('')
    }
  }

  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }

  return (<>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
        />

      </form>
    </header>

    <div className="movie-container">
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id}
          {...movie} />)}
    </div>
  </>
  );
}
export default App;