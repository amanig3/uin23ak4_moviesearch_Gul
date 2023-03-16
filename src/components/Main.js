import MovieCard from './MovieCard';
import Search from './Search';
export default function Main({movies, setSearch, getMovies}){
    return (
      <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section className='movie-view'>
        <h2>Movies</h2>
          {movies.map((movie, index) => (
                  <MovieCard key={index} title={movie.Title} img={movie.Poster} year={movie.Year}/> 
             
          ))}
        </section>
      </>

      );
}