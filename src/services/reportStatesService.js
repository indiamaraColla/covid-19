import statesApi from './states';

const reportStatesService = (payload) => {
  return statesApi.get('api/report/v1', payload).then((response) => response.data);
};

export default reportStatesService;
