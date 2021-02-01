import assessmentRepository from './AssessmentRepository';
import threatModelRepository from '../ThreatModels/ThreatModelRepository';
import { computed } from 'mobx';

export default class AssessmentPresenter {
  @computed get assessmentModel() {
    const assessmentModel = assessmentRepository.assessmentModel;
    const threatModel = threatModelRepository.threatModel;

    const overallRating = threatModel.ratings.find(rating => rating.id === assessmentModel.ratingId);

    return {
      id: assessmentModel.id,
      modelId: assessmentModel.modelId,
      rating: {
        ...overallRating,
        name: overallRating ? overallRating.name.toUpperCase() : '',
      },
      riskFactors: assessmentModel.riskFactors.map(riskFactor => {
        const thisRating = threatModel.ratings.find(rating => rating.id === riskFactor.ratingId);

        return {
          ...riskFactor,
          rating: {
            ...thisRating,
            ranking: thisRating ? 5 - thisRating.ranking : 0,
          },
        };
      }),
    };
  }

  loadAssessmentModel = async countryCode => {
    await assessmentRepository.loadModel(countryCode);
  };
}
