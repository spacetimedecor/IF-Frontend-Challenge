import threatModelRepository from './ThreatModelRepository';
import { computed } from 'mobx';

export default class ThreatModelPresenter {
  @computed get threatModels() {
    const programmersModel = threatModelRepository.threatModel;
    return {
      name: programmersModel.name,
      threatRatings: programmersModel.ratings.map(rating => {
        return { name: rating.name, colour: rating.colour };
      }),
      threatFactors: programmersModel.riskFactors.map(factor => factor.name),
      pageTitle: 'Country Threat Analysis',
    };
  }

  loadThreatModels = async () => {
    await threatModelRepository.loadModel();
  };
}
