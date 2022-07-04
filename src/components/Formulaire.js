import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';
const Formulaire = () => {
    const [moviesData, setMoviesData] = useState([]);
    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=78323d6388bafee535fce5fb030e2dad&query=star&language=fr-FR`
          ).then((res) => setMoviesData(res.data.results))
        },[] );
    return (
      <div className="form-component">
        <div className="form-container">
            <form>
                <input type="text"  placeholder="Entrer le titre d'un film" id="Search-input"/>
                <input type="submit" value="Rechercher" />
            </form>
            <div className="btn-sort-container">
                <div className="btn-sort" id="goodToBad">Top<span>&#9755;</span></div>
                <div className="btn-sort" id="badToGood">Bad<span>&#9754;</span></div>
            </div>
        </div>
        <div className="result">{moviesData.slice(0,12).map((movie) => <Card key={movie.id} movie={movie} />)}</div>
      </div>
      
    );
};

export default Formulaire;