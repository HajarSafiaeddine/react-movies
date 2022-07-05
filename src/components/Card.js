import React from 'react';

const Card = (props) => {
    const dateFormater = (date) =>{
      let[yy,mm,dd] = date.split("-");
      return [dd,mm,yy].join("/");
    }
    const addStorage = () =>{
      let storedData = window.localStorage.movies ?  window.localStorage.movies.split(",") : [] ;
      if (!storedData.includes(props.id.toString())) {
        storedData.push(props.id);
        window.localStorage.movies = storedData;
      }
    };
    const genreFinder = () => {
      let genreArray = [];
      for (let i = 0; i < props.genre_ids.length; i++) {
        switch (props.genre_ids[i]) {
          case 28:
            genreArray.push(`Action`);
            break;
          case 12:
            genreArray.push(`Aventure`);
            break;
          case 16:
            genreArray.push(`Animation`);
            break;
          case 35:
            genreArray.push(`Comédie`);
            break;
          case 80:
            genreArray.push(`Policier`);
            break;
          case 99:
            genreArray.push(`Documentaire`);
            break;
          case 18:
            genreArray.push(`Drame`);
            break;
          case 10751:
            genreArray.push(`Famille`);
            break;
          case 14:
            genreArray.push(`Fantasy`);
            break;
          case 36:
            genreArray.push(`Histoire`);
            break;
          case 27:
            genreArray.push(`Horreur`);
            break;
          case 10402:
            genreArray.push(`Musique`);
            break;
          case 9648:
            genreArray.push(`Mystère`);
            break;
          case 10749:
            genreArray.push(`Romance`);
            break;
          case 878:
            genreArray.push(`Science-fiction`);
            break;
          case 10770:
            genreArray.push(`Téléfilm`);
            break;
          case 53:
            genreArray.push(`Thriller`);
            break;
          case 10752:
            genreArray.push(`Guerre`);
            break;
          case 37:
            genreArray.push(`Western`);
            break;
          default:
            break;
        }
      }
      return genreArray.map((genre) => <li key={genre}>{genre}</li>);
    };
    return (
      <div className="card">
         <img
        src={
          props.poster_path
            ? "https://image.tmdb.org/t/p/w500" + props.poster_path
            : "./img/poster.jpg"
        }
        alt="affiche film"
      />
        <h2>{props.title}</h2>
        {props.release_date ? <h5> sorti le : {dateFormater(props.release_date)} </h5> : ""}
        <h4><span>⭐</span> {props.vote_average}/10 </h4>
        <ul>{genreFinder()}</ul>
        {props.overview ? <h3>synopsis</h3> : <p>Ce film ne contient pas de synopsis</p>}<p> {props.overview} </p>
        <div className="btn" onClick={() => addStorage()}>
          Ajouter aux coups de coeur
        </div>
      </div>
    );
};

export default Card;