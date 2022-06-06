import React from 'react';
import '../NameCard/NameCard.css';

const nameCheapUrl =
    'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbk1Rdmo5TEpQYkxFTzZhMkl1T3RheWFGUEE1QXxBQ3Jtc0tuN1BTcHlCNXJMOGdlMURrc3RTY2ZkaTdjQlQ0dTB4SElMRlNoMDVQbmFucHd4N3E4MlpZOXJ4bDk1M2tuU3JLazZxNVBSRmlOc0JnU1dhVWdab0huV3FRVEJTWWxVeHF1NWlRajVfUk42cjZlMEhpSQ&q=https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D%27%3B&v=PIrcgjaPPaU';

const NameCard = ({ suggestedName }) => {
    return (
        <a 
        target="_blank"
        rel="noreferrer"
        className="card-link" 
        href={`${nameCheapUrl}${suggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};

export default NameCard;
