import httpGateway from "../shared/HttpGateway";
import { observable, action } from "mobx";

class CountriesRepository {
  @observable countries = [];

  @action
  loadModel = async () => {
    const countriesDto = await httpGateway.get("countries");
    this.countries = countriesDto.data.map((country) => {
      return { ...country };
    });
  };
}

const countriesRepository = new CountriesRepository();
export default countriesRepository;
