import React from 'react';

function Score(props) {
  const { currentScore, bestScore } = props;
  return (
    <div className="scoreBoard">
      <div className="currentScore">
        {' '}
        Score :
        {' '}
        {currentScore}
        {' '}
      </div>
      <div className="bestScore">
        {' '}
        Best :
        {' '}
        {bestScore}
        {' '}
      </div>
    </div>
  );
}

export default Score;
