import statesApi from './api';

const worldService = (payload) => {
  return statesApi.get('/summary', payload).then((response) => response.data);
};

export default worldService;
