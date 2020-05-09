import React from 'react';
import { Link } from 'react-router-dom';
import { BaseItem } from '../../types/entitiesBase';

import './PokemonCard.scss';

interface PokemonCardInterface {
  pokemon: BaseItem;
  link: string;
}

const PokemonCard: React.FC<PokemonCardInterface> = ({ pokemon, link }) => (
  <div className="pokemon-card">
    <Link to={`${link}/${pokemon.name}`} className="pokemon-card__link">
      <img src="https://via.placeholder.com/200" alt={pokemon.name} />
      <h5 className="pokemon-card__title font-h5">{pokemon.name}</h5>
    </Link>
  </div>
);

export default PokemonCard;
