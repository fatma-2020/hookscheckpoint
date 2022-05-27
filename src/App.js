import { useState } from "react";
import "./App.css";
import { moviesL } from "./data";
import MovieList from "./Components/MovieList/MovieList";
import Filter from "./Components/Filter/Filter";
import Search from "./Components/Search/Search";
import AddMovie from "./Components/AddMovie/AddMovie";

function App() {
  const [movies, setMovies] = useState(moviesL);
  const [search, setSearch] = useState(false);
  const [filtredL, setFiltredL] = useState([]);
  const addFilm = (t, i, d, r) =>
    setMovies([
      ...movies,
      { id: movies.length, title: t, image: i, desc: d, rating: r },
    ]);
  const searching = (x) => {
    console.log(x);
    setSearch(true);
    typeof x == "number"
      ? setFiltredL(moviesL.filter((el) => el.rating >= x))
      : setFiltredL(
          moviesL.filter((el) =>
            el.title.toLowerCase().includes(x.toLowerCase().trim())
          )
        );
  };
  return (
    <div className="App">
      <h2>Animation قائمة بأفضل أفلام  الـ</h2>
      <div className="ARbar">
        <Search searching={searching} />
        <Filter searching={searching} />
      </div>
      <br />
      <AddMovie addFilm={addFilm} />

      {search === false ? (
        <MovieList movies={movies} />
      ) : (
        <>
          <MovieList movies={filtredL} />
          <button className="cancel-button" onClick={() => setSearch(!search)}>
            الرجوع إلى القائمة
          </button>
        </>
      )}
    </div>
  );
}

export default App;
