import axios from 'axios';
import {
  // eslint-disable-next-line comma-dangle
  requestInterceptor, responseErrorInterceptor, responseSuccessInterceptor
} from './intercecptors';

function Factory(baseURL) {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(requestInterceptor);

  instance.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor,
  );

  return instance;
}

export default Factory;
