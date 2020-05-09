import axios, { AxiosResponse } from 'axios';

interface Response<T> {
  data?: T;
  error?: Error;
}

const agent = axios.create({
  baseURL: process.env.REACT_APP_POCEMON_API,
});

agent.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : 408;
    if (status >= 500) {
      window.console.log(error);
    }
    return Promise.reject(error);
  },
);

export default {
  GET<T = object>(path: string): Promise<Response<T>> {
    return agent
      .get(path)
      .then((response: AxiosResponse<T>) => ({
        data: response.data,
      }))
      .catch((err) => {
        window.console.error(err.toString() || 'Неизвестная ошибка');
        return {
          error: err,
        };
      });
  },
};
