import React from 'react';
import Card from './Card';

function CardBox(props) {
  const { cards, pickCard } = props;

  const domCards = cards.map((card) => (
    <Card pickCard={pickCard} key={card.name} poke={card} />
  ));
  return (
    <div className="cardBox">
      {domCards}
    </div>
  );
}

export default CardBox;
