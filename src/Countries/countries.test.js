import CountriesPresenter from './CountriesPresenter';

const countriesPresenter = new CountriesPresenter();
const loadSpy = jest.spyOn(countriesPresenter, 'loadCountries');

it('Loads country repo data', async () => {
  expect(countriesPresenter).toBeInstanceOf(CountriesPresenter);
  expect(countriesPresenter.countries).toStrictEqual([]);
  await countriesPresenter.loadCountries();
  expect(loadSpy).toHaveBeenCalledTimes(1);
  expect(countriesPresenter.countries.length).toBe(2);
  expect(countriesPresenter.countries[0]).toStrictEqual({ countryName: 'Indonesia', countryCode: 'IDN' });
  expect(countriesPresenter.countries[1]).toStrictEqual({ countryName: 'Afghanistan', countryCode: 'AFG' });
});
