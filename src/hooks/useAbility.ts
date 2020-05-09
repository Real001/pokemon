import { useEffect, useState } from 'react';
import getAbility from '../services/getAbility';
import { Ability } from '../types/ability';
import { State } from '../types/entitiesBase';


export default (name: string): State<Ability | null> => {
  const [ability, setAbility] = useState<Ability | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchData = (): void => {
      setLoading(true);
      getAbility(name).then((response) => {
        if (response.data) {
          setAbility(response.data);
        }
      }).catch((err) => {
        setError(err);
      }).finally(() => {
        setLoading(false);
      });
    };
    fetchData();
  }, [name]);
  return {
    data: ability,
    isLoading,
    error,
  };
};
