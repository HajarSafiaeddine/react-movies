import React from 'react';

const Card = ({ movie }) => {
    return (
      <div className="card">
        {/* <img src=''/> */}
        <h2>{movie.title}</h2>
      </div>
    );
};

export default Card;