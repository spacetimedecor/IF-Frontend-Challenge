import countriesRepository from "../Countries/CountryRepository";
import { computed } from "mobx";

export default class CountriesPresenter {
  @computed get countries() {
    return countriesRepository.countries.map((country) => {
      return {
        countryName: country.name,
        countryCode: country.code
      };
    });
  }

  loadCountries = async () => {
    await countriesRepository.loadModel();
  };
}
