import axios from 'axios';

const api = axios.create({
  baseURL: 'https://piupiuwer.polijrinternal.com',

  // transformResponse: [response => {
  //   if (!response.ok) throw response;
  // }]
});


export default api;