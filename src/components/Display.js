import React from "react";

const Display = props => {
  return (
    <div className='umpiresCount'>
      <h2>The Count!</h2>
      <p>Balls: {props.balls} </p>
      <p>Strikes: {props.strikes}</p>
    </div>
  );
};

export default Display;