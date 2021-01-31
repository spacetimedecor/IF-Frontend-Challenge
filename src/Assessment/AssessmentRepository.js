import httpGateway from '../shared/HttpGateway';
import { observable, action } from 'mobx';

class AssessmentRepository {
  @observable
  assessmentModel = {
    id: '',
    modelId: '',
    ratingId: '',
    riskFactors: [],
  };

  @action
  loadModel = async countryCode => {
    const modelDto = await httpGateway.get(`countries/${countryCode}?include=assessment`);
    this.assessmentModel = {
      id: modelDto.threatAssessment.id,
      modelId: modelDto.threatAssessment.modelId,
      ratingId: modelDto.threatAssessment.ratingId,
      riskFactors: modelDto.threatAssessment.riskFactors,
    };
  };
}

const assessmentRepository = new AssessmentRepository();
export default assessmentRepository;
