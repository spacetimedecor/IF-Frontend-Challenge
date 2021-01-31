import React, { useState, useEffect } from 'react';
import ThreatModelPresenter from './ThreatModels/ThreatModelPresenter';
import CountriesPresenter from './Countries/CountriesPresenter';
import AssessmentPresenter from './Assessment/AssessmentPresenter';
import './styles.css';
import CountryAssessment from './Components/CountryAssessment';

export default function App() {
  const threatModelPresenter = new ThreatModelPresenter();
  const countryPresenter = new CountriesPresenter();
  const assessmentPresenter = new AssessmentPresenter();

  const [localCountries, copyViewModelToLocalCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [localThreatModel, copyViewModelToLocalThreatModel] = useState({
    name: '',
    threatFactors: [],
    threatRatings: [],
  });
  const [currentAssessment, copyViewModelToLocalAssessment] = useState();

  useEffect(() => {
    async function loadThreats() {
      await threatModelPresenter.loadThreatModels();
      copyViewModelToLocalThreatModel(threatModelPresenter.threatModels);
    }

    async function loadCountries() {
      await countryPresenter.loadCountries();
      copyViewModelToLocalCountries(countryPresenter.countries);
      setSelectedCountry(countryPresenter.countries[0].countryCode);
    }

    Promise.all([loadThreats(), loadCountries()])
      .then(() => {
        console.info('Loaded data.');
      })
      .catch(e => {
        console.error(`Loading data failed with error: ${e}`);
      });
  }, []);

  const changeCountry = event => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    async function loadAssessment() {
      console.log(`Loading country assessment: ${selectedCountry}`);
      await assessmentPresenter.loadAssessmentModel(selectedCountry);
      copyViewModelToLocalAssessment(assessmentPresenter.assessmentModel);
    }
    loadAssessment()
      .then(() => {
        console.log(`Loaded threat assessment`);
      })
      .catch(e => {
        console.log(`Couldn't Load threat assessment with error: ${e}`);
      });
  }, [selectedCountry]);

  return (
    <>
      <div id='App'>
        <h1>{localThreatModel.pageTitle}</h1>
      </div>

      {/*<div className='Model'>*/}
      {/*  <h2>Threat Model: {localThreatModel.name}</h2>*/}
      {/*  <h3>Rating Levels</h3>*/}
      {/*  <ul>*/}
      {/*    {localThreatModel.threatRatings.map((rating, i) => (*/}
      {/*      <li key={`${rating.id}-${i}`} style={{ color: rating.colour }}>*/}
      {/*        {rating.name}*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*  <h3>Risk Factors</h3>*/}
      {/*  <ul>*/}
      {/*    {localThreatModel.threatFactors.map((factor, i) => (*/}
      {/*      <li key={`${factor.id}-${i}`}>{factor}</li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}

      <div id='Countries'>
        <h2>Country List</h2>
        <select name='countries' id='countries' value={selectedCountry} onChange={changeCountry}>
          {localCountries.map(country => (
            <option key={country.countryCode} value={country.countryCode}>
              {country.countryName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2>Country Assessment</h2>
        {currentAssessment && (
          <CountryAssessment
            id={currentAssessment.id}
            modelId={currentAssessment.modelId}
            rating={currentAssessment.rating}
            riskFactors={currentAssessment.riskFactors}
          />
        )}
      </div>
    </>
  );
}
