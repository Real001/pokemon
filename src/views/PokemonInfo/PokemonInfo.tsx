import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as LoaderIcon } from '../../assets/icons/loader.svg';
import { LinkArrow } from '../../components/LinkArrow';
import useData from '../../hooks/useData';
import getPokemonInfo from '../../services/getPokemonInfo';
import { PokemonInfo as PokemonInfoInterface } from '../../types/pokemon';

import './PokemonInfo.scss';

const PokemonInfo: React.FC = () => {
  const { name } = useParams();
  const pokemonState = useData<PokemonInfoInterface>(name, getPokemonInfo);
  const id = pokemonState.data?.id || 0;
  const idImage = id < 10 ? `00${id}` : id < 100 ? `0${id}` : id;
  const urlImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idImage}.png`;
  return (
    <div className="info">
      <LinkArrow link="/" />
      {pokemonState.isLoading ? (
        <div className="loading">
          <LoaderIcon className="loading__icon" />
        </div>
      ) : pokemonState.error ? (
        <div className="error">
          {' '}
          <span>Error: </span>
          {pokemonState.error.message}
        </div>
      ) : pokemonState.data && (
        <div>
          <div className="info__title">
            <h2 className="font-h2">{ pokemonState.data.name.toUpperCase() }</h2>
            <span className="info__title__number font-h2">{ `№ ${pokemonState.data.id}` }</span>
          </div>
          <div className="info__content">
            <div>
              <img className="info__image" src={urlImage} alt={pokemonState.data.name} />
            </div>
            <div className="info__info">
              <div className="info__info__grid">
                <div className="info__characteristic">
                  <div className="info__characteristic__data">
                    <span className="info__characteristic__data__title">Height</span>
                    <span>{pokemonState.data.height}</span>
                  </div>
                  <div className="info__characteristic__data">
                    <span className="info__characteristic__data__title">Species</span>
                    <span>{pokemonState.data.species.name}</span>
                  </div>
                  <div className="info__characteristic__data">
                    <span className="info__characteristic__data__title">Weight</span>
                    <span>{pokemonState.data.weight}</span>
                  </div>
                  <div className="info__characteristic__data">
                    <span className="info__characteristic__data__title">Abilities</span>
                    {pokemonState.data.abilities.map((ability) => (
                      <Link key={ability.ability.name} className="info__characteristic__data__list" to={`/ability/${ability.ability.name}`}>
                        {ability.ability.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="info__types">
                  <span className="info__types__title">Types</span>
                  <div className="info__types__content">
                    {pokemonState.data.types.map((type) => (
                      <div key={type.type.name} className={`info__types__chip info__types__chip--${type.type.name}`}>
                        {type.type.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="info__stats">
                <span className="info__stats__title">Stats</span>
                <div>
                  {pokemonState.data.stats.map((stat) => (
                    <div
                      key={`${stat.stat.name}_${stat.base_stat}`}
                      className="info__stats__stat"
                      style={{ width: stat.base_stat * 3 }}
                    >
                      {stat.stat.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
