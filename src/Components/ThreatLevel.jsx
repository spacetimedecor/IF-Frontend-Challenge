import React from 'react';
import PropTypes from 'prop-types';

export default function ThreatLevel(props) {
  const { name, ratingName, ranking, colour } = props;
  return (
    <div className='ThreatLevel'>
      <div className='CountryAssessmentThreatLevelDetails'>
        <h5 className='CountryAssessmentThreatLevelName'>{name}</h5>
        <h6 className='CountryAssessmentThreatRatingName'>
          <span>{ratingName}</span>
        </h6>
      </div>
      <div className='CountryAssessmentThreatBarHolder'>
        <div className='CountryAssessmentThreatBar' style={{ width: `calc(${ranking * 25}%)`, backgroundColor: colour }} />
      </div>
    </div>
  );
}

ThreatLevel.propTypes = {
  name: PropTypes.string.isRequired,
  ratingName: PropTypes.string.isRequired,
  ranking: PropTypes.number.isRequired,
  colour: PropTypes.string.isRequired,
};
