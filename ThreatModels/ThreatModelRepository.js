import httpGateway from "../shared/HttpGateway";
import Observable from "../shared/Observable";

class ThreatModelRepository {
  programmersModel = new Observable({
    name: "",
    ratings: [],
    riskFactors: []
  });

  getModel = async (callback) => {
    this.programmersModel.subscribe(callback);
    await this.loadModel();
    this.programmersModel.notify();
  };

  loadModel = async () => {
    const modelDto = await httpGateway.get("threatModel");

    this.programmersModel.value = {
      name: modelDto.threatModel.name,
      riskFactors: modelDto.threatModel.riskFactors,
      ratings: modelDto.threatModel.ratings
    };
  };
}

const threatModelRepository = new ThreatModelRepository();
export default threatModelRepository;
