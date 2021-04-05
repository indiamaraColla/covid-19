import statesApi from './states';

const reportCountriesService = (payload) => {
  return statesApi.get('/api/report/v1/countries', payload).then((response) => response.data);
};

export default reportCountriesService;
