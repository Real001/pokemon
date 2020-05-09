import { useEffect, useState } from 'react';
import getPokemonInfo from '../services/getPokemonInfo';
import { PokemonInfo } from '../types/pokemon';
import { State } from '../types/entitiesBase';


export default (name: string): State<PokemonInfo | null> => {
  const [pokemon, setPokemon] = useState<PokemonInfo | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchData = (): void => {
      setLoading(true);
      getPokemonInfo(name).then((response) => {
        if (response.data) {
          setPokemon(response.data);
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
    data: pokemon,
    isLoading,
    error,
  };
};
