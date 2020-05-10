import { useEffect, useState } from 'react';
import { State } from '../types/entitiesBase';
import { Response } from '../agent';


export default <T>(name: string, getRequest: (name: string) =>
  Promise<Response<T>>): State<T | null> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setLoading(true);
    getRequest(name).then((response) => {
      if (response.data) {
        setData(response.data);
      }
    }).catch((err) => {
      setError(err);
    }).finally(() => {
      setLoading(false);
    });
  }, [name, getRequest]);
  return {
    data,
    isLoading,
    error,
  };
};
