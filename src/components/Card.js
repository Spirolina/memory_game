import React from 'react';

function Card(props) {
  const { poke, pickCard } = props;

  return (
    <div onClick={pickCard} onKeyDown={() => {}} tabIndex="0" onKeyPress={() => {}} onKeyUp={() => {}} role="button" className="card" id={poke.name}>
      <img alt={poke.name} src={poke.img} />
      <h3>
        {' '}
        {poke.name}
      </h3>
    </div>
  );
}

export default Card;
