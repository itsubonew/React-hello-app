import { useEffect, useState } from "react";

import MovieCard from "./components/MovieCard";
import './App.css';
import SearchIcon from './search.svg';

// API key 
const API_URL= `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;
console.log(process.env.REACT_APP_API_KEY)

const movie1 = {
        "Title": "",
        "Year": "",
        "imdbID": "",
        "Type": "",
        "Poster": ""
    
}

const App = ()=> {
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(()=>{
        searchMovies('')
    },[]);

    return(
        <div className="app">
             <h1 className="title">Your Movies</h1>
            
            <div className="search">
            <input 
                placeholder="Search for Movies" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                    />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => 
                        <MovieCard movie={movie} />)}
                     </div>
                )  : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
       

    );
}

export default App;

