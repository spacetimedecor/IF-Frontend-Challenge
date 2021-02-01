import AssessmentPresenter from './AssessmentPresenter';

const assessmentPresenter = new AssessmentPresenter();
const loadSpy = jest.spyOn(assessmentPresenter, 'loadAssessmentModel');

function checkAssessmentModelDefinition() {
  expect(assessmentPresenter.assessmentModel.id).toBeDefined();
  expect(assessmentPresenter.assessmentModel.id).toBeTruthy();
  expect(assessmentPresenter.assessmentModel.modelId).toBeDefined();
  expect(assessmentPresenter.assessmentModel.modelId).toBeTruthy();
  expect(assessmentPresenter.assessmentModel.rating).toBeDefined();
  expect(assessmentPresenter.assessmentModel.rating).toBeTruthy();
  expect(assessmentPresenter.assessmentModel.rating).toHaveProperty('name');
  expect(assessmentPresenter.assessmentModel.riskFactors).toBeDefined();
  expect(assessmentPresenter.assessmentModel.riskFactors).toBeTruthy();
  expect(assessmentPresenter.assessmentModel.riskFactors).toHaveLength(5);
}

it('Loads assessment model repo data', async () => {
  expect(assessmentPresenter).toBeInstanceOf(AssessmentPresenter);
  expect(assessmentPresenter.assessmentModel).toStrictEqual({
    id: '',
    modelId: '',
    rating: { name: '' },
    riskFactors: [],
  });
  await assessmentPresenter.loadAssessmentModel('IDN');
  expect(loadSpy).toHaveBeenCalledTimes(1);
  checkAssessmentModelDefinition();
  await assessmentPresenter.loadAssessmentModel('AFG');
  expect(loadSpy).toHaveBeenCalledTimes(2);
  checkAssessmentModelDefinition();
  expect(
    assessmentPresenter.assessmentModel.riskFactors.every(rf => {
      return rf.name !== undefined && rf.id !== undefined && rf.ratingId !== undefined;
    }),
  );
});
