import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';
const Formulaire = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("code");
    const [sortGoodBad, setSortGoodBad] = useState(null);
    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=78323d6388bafee535fce5fb030e2dad&query=${search}&language=fr-FR`
          ).then((res) => setMoviesData(res.data.results)) 
        },[search] );
    
        
    return (
      <div className="form-component">
        <div className="form-container">
            <form>
                <input type="text"  placeholder="Entrer le titre d'un film" id="Search-input"onChange = {(e)=> setSearch(e.target.value)}  />
                <input type="submit" value="Rechercher" />
            </form>
            <div className="btn-sort-container">
                <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>Top<span>&#9755;</span></div>
                <div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>Bad<span>&#9754;</span></div>
            </div>
        </div>
        <div className="result">{moviesData.sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          }).map((movie) => <Card key={movie.id} {...movie} />)}</div>
      </div>
      
    );
};

export default Formulaire;