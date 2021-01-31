import React from 'react';
import PropTypes from 'prop-types';
import ThreatLevel from './ThreatLevel';

export default function CountryAssessment(props) {
  const { rating, riskFactors } = props;
  return (
    <div id='CountryAssessmentWrapper'>
      <div id='CountryAssessment'>
        <div id='CountryAssessmentHeader'>
          <h5 className='CountryAssessmentHeaderSubtitle'>Overall Threat Level</h5>
          <h3 className='CountryAssessmentHeaderTitle'>{rating.name}</h3>
        </div>
        <div id='CountryAssessmentBody'>
          {riskFactors.map(riskFactor => {
            return (
              <ThreatLevel
                key={riskFactor.id}
                name={riskFactor.name}
                ratingName={riskFactor.rating.name}
                ranking={riskFactor.rating.ranking}
                colour={riskFactor.rating.colour}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const RatingType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ranking: PropTypes.number.isRequired,
  colour: PropTypes.string.isRequired,
};

export const RiskFactorType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.shape(RatingType).isRequired,
};

export const CountryAssessmentType = {
  id: PropTypes.string.isRequired,
  modelId: PropTypes.string.isRequired,
  rating: PropTypes.shape(RatingType).isRequired,
  riskFactors: PropTypes.arrayOf(PropTypes.shape(RiskFactorType)).isRequired,
};

CountryAssessment.propTypes = CountryAssessmentType;
