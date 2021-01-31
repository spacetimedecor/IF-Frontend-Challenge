import httpGateway from '../shared/HttpGateway';
import { observable, action } from 'mobx';

class ThreatModelRepository {
  @observable
  threatModel = {
    name: '',
    ratings: [],
    riskFactors: [],
  };

  @action
  loadModel = async () => {
    const modelDto = await httpGateway.get('threatModel');

    this.threatModel = {
      name: modelDto.threatModel.name,
      riskFactors: modelDto.threatModel.riskFactors,
      ratings: modelDto.threatModel.ratings,
    };
  };
}

const threatModelRepository = new ThreatModelRepository();
export default threatModelRepository;
