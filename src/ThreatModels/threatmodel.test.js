import ThreatModelPresenter from './ThreatModelPresenter';

const threatModelPresenter = new ThreatModelPresenter();
const loadSpy = jest.spyOn(threatModelPresenter, 'loadThreatModels');

it('Loads threat model repo data', async () => {
  expect(threatModelPresenter).toBeInstanceOf(ThreatModelPresenter);
  expect(threatModelPresenter.threatModels).toStrictEqual({
    name: '',
    threatRatings: [],
    threatFactors: [],
    pageTitle: 'Country Threat Analysis',
  });
  await threatModelPresenter.loadThreatModels();
  expect(loadSpy).toHaveBeenCalledTimes(1);
  expect(threatModelPresenter.threatModels.name).toBeDefined();
  expect(threatModelPresenter.threatModels.pageTitle).toBeDefined();
  expect(threatModelPresenter.threatModels.threatRatings).toBeDefined();
  expect(threatModelPresenter.threatModels.threatRatings).toHaveLength(4);
  expect(threatModelPresenter.threatModels.threatFactors).toBeDefined();
  expect(threatModelPresenter.threatModels.threatFactors).toHaveLength(5);
  expect(
    threatModelPresenter.threatModels.threatRatings.every(tr => {
      return tr.name !== undefined && tr.colour !== undefined && typeof tr === typeof { name: '', colour: '' };
    }),
  );
  expect(
    threatModelPresenter.threatModels.threatFactors.every(tr => {
      return typeof tr === 'string';
    }),
  );
});
