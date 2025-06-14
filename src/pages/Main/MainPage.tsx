import { useMatch } from "react-router-dom";
import { TopFilms } from "../../ui/TopMovies/TopMovies"
import MoviePage from "../Movie/MoviePage";

const MainPage = () => {
  const match = useMatch('/');

  return (
    <div
      style={{
        paddingTop: '32px',
        paddingBottom: '120px',
      }}
      >
      <MoviePage />
      {match && <TopFilms />}
    </div>
  )
}

export default MainPage