import React from 'react';
import NameCard from '../NameCard/NameCard';
import '../ResultsContainer/ResultsContainer.css'

const ResultsContainer = ({ suggestedNames}) => {
 const suggestNameJsx = suggestedNames.map(suggestedName =>{
   return <NameCard key={suggestedName} suggestedName={suggestedName} />
  })

  return (
    <div className="results-container">
      <p className="result-text">{suggestNameJsx}</p>
    </div>
  )
}

export default ResultsContainer