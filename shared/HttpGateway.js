class HttpGateway {
  get = async (path) => {
    return new Promise((response) => {
      setTimeout(() => {
        //threatModel
        if (path === "threatModel") {
          response({
            threatModel: {
              id: "a1c62ffd-627c-45bb-9790-a9fd2965d554",
              organisationId: "a1c62ffd-627c-45bb-9790-a9fd2965d554",
              entityType: "country",
              name: "Custom Country",
              ratings: [
                {
                  id: "355072ba-819f-4099-b1b3-9ecef1c1d0a9",
                  name: "Severe",
                  ranking: 1,
                  colour: "#fc2403"
                },
                {
                  id: "a1c62ffd-627c-45bb-9790-a9fd2965d554",
                  name: "High",
                  ranking: 2,
                  colour: "#851707"
                },
                {
                  id: "682db998-60fb-4222-b2b2-44fc64bdd8a3",
                  name: "Medium",
                  ranking: 3,
                  colour: "#402e2b"
                },
                {
                  id: "d21761f1-2d5a-4691-b850-22a5bd63f048",
                  name: "Low",
                  ranking: 4,
                  colour: "#777e85"
                }
              ],
              riskFactors: [
                {
                  id: "637221b4-256e-48ab-84c8-a2b951510cf6",
                  name: "Political Instability"
                },
                {
                  id: "5b21b911-7ba6-43dd-8656-01a6bd9cd46f",
                  name: "Crime"
                },
                {
                  id: "22e37125-fe1c-4f79-9d6b-f25de98652fb",
                  name: "Activism"
                },
                {
                  id: "cc2a7624-15e9-496e-b8f9-2100362c9eac",
                  name: "Terrorism"
                },
                {
                  id: "bb8be998-935c-4fbe-a9c0-f01ef6f108b2",
                  name: "Espionage"
                }
              ]
            }
          });
        }
        //countries
        //  This returns a list of the countries with no additional includes.
        if (path === "countries") {
          response({
            data: [
              {
                code: "IDN",
                alpha2: "ID",
                name: "Indonesia",
                continent: {
                  code: "AS",
                  name: "Asia"
                }
              },
              {
                code: "AFG",
                alpha2: "AF",
                alpha3: "AFG",
                name: "Afghanistan",
                sovereignty: "Afghanistan",
                continent: {
                  code: "AS",
                  name: "Asia"
                }
              }
            ]
          });
        }
        // Candidate will implement a 'view assessment' funcitonality
        //  candidate will have an interface that will set the selected country
        //  once a country is selected the threat assessment for that country will be displayed.
        //country assessment
        if (path === "countries/AFG?include=assessment") {
          response({
            threatAssessment: {
              id: "a1c62ffd-627c-45bb-9790-a9fd2965d555",
              modelId: "e16340c8-99a5-4e43-91c2-8b18af00e352",
              ratingId: "355072ba-819f-4099-b1b3-9ecef1c1d0a9",
              riskFactors: [
                {
                  id: "637221b4-256e-48ab-84c8-a2b951510cf6",
                  name: "Political Instability",
                  ratingId: "355072ba-819f-4099-b1b3-9ecef1c1d0a9"
                },
                {
                  id: "5b21b911-7ba6-43dd-8656-01a6bd9cd46f",
                  name: "Crime",
                  ratingId: "355072ba-819f-4099-b1b3-9ecef1c1d0a9"
                },
                {
                  id: "22e37125-fe1c-4f79-9d6b-f25de98652fb",
                  name: "Activism",
                  ratingId: "355072ba-819f-4099-b1b3-9ecef1c1d0a9"
                },
                {
                  id: "cc2a7624-15e9-496e-b8f9-2100362c9eac",
                  name: "Terrorism",
                  ratingId: "355072ba-819f-4099-b1b3-9ecef1c1d0a9"
                },
                {
                  id: "bb8be998-935c-4fbe-a9c0-f01ef6f108b2",
                  name: "Espionage",
                  ratingId: "a1c62ffd-627c-45bb-9790-a9fd2965d554"
                }
              ]
            }
          });
        }
        if (path === "countries/IDN?include=assessment") {
          response({
            threatAssessment: {
              id: "a1c62ffd-627c-45bb-9790-a9fd2965d554",
              modelId: "e16340c8-99a5-4e43-91c2-8b18af00e352",
              ratingId: "d21761f1-2d5a-4691-b850-22a5bd63f048",
              riskFactors: [
                {
                  id: "637221b4-256e-48ab-84c8-a2b951510cf6",
                  name: "Political Instability",
                  ratingId: "d21761f1-2d5a-4691-b850-22a5bd63f048"
                },
                {
                  id: "5b21b911-7ba6-43dd-8656-01a6bd9cd46f",
                  name: "Crime",
                  ratingId: "a1c62ffd-627c-45bb-9790-a9fd2965d554"
                },
                {
                  id: "22e37125-fe1c-4f79-9d6b-f25de98652fb",
                  name: "Activism",
                  ratingId: "d21761f1-2d5a-4691-b850-22a5bd63f048"
                },
                {
                  id: "cc2a7624-15e9-496e-b8f9-2100362c9eac",
                  name: "Terrorism",
                  ratingId: "d21761f1-2d5a-4691-b850-22a5bd63f048"
                },
                {
                  id: "bb8be998-935c-4fbe-a9c0-f01ef6f108b2",
                  name: "Espionage",
                  ratingId: "a1c62ffd-627c-45bb-9790-a9fd2965d554"
                }
              ]
            }
          });
        }
      }, 0);
    });
  };
}

const httpGateway = new HttpGateway();
export default httpGateway;
