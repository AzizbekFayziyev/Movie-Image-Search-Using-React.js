import "./Movie.css"

export default function Movie(e) {
    const { movies = [] } = e;

    return (
        <div className="MovieContainer">
            <div className="movies">

                {movies.length ? movies.map(movie => (

                    <div className="card" key={movie.imdbID}>

                        <div className="card-img">
                            <img src={movie.Poster} alt="movie" />
                        </div>
                        <div className="card-body">
                            <h1>{movie.Title}</h1>
                            <span>
                                <h3>Year: {movie.Year}</h3>
                                <h3>Type: {movie.Type}</h3>
                            </span>
                        </div>
                    </div>


                )) : <span className="NotFound">Movie Not Found...</span>}
            </div>

        </div>

    )
}