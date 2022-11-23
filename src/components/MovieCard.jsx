import React from 'react';

const MovieCard = ({ movie })=>{
    return(
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https://www.drinknewtopia.com/wp-content/uploads/woocommerce-placeholder-1150x1150.png'} alt = {movie.Title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
                </div>

    );
}

export default MovieCard;