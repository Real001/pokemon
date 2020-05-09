import React, { useState } from 'react';
import InputSearch from '../../components/InputSearch';
import PokemonCard from '../../components/PokemonCard';
import { ReactComponent as LoaderIcon } from '../../assets/icons/loader.svg';
import usePokemonState from '../../hooks/usePokemonState';
import './Main.scss';

const Main: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const pokemonState = usePokemonState(searchValue);
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className="main">
      <div className="main__search">
        <InputSearch onSearch={handleSearch} />
      </div>
      {pokemonState.isLoading ? (
        <div className="loading">
          <LoaderIcon className="loading__icon" />
        </div>
      ) : pokemonState.error ? (
        <div className="error">
          <span>Error: </span>
          {pokemonState.error.message}
        </div>
      )
        : (
          <div className="main__content">
            {pokemonState.pokemonList.map((pokemon) => <PokemonCard key={pokemon.url} pokemon={pokemon} link="/pokemon" />)}
          </div>
        )}
    </div>
  );
};

export default Main;
