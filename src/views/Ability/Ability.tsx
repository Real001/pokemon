import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ButtonArrow } from '../../components/LinkArrow';
import { ReactComponent as LoaderIcon } from '../../assets/icons/loader.svg';
import useAbility from '../../hooks/useAbility';

import './Ability.scss';

const Ability: React.FC = () => {
  const { name } = useParams();
  const history = useHistory();
  const abilityState = useAbility(name);
  return (
    <div className="ability">
      <ButtonArrow onClick={history.goBack} />
      { abilityState.isLoading ? (
        <div className="loading">
          <LoaderIcon className="loading__icon" />
        </div>
      ) : abilityState.error ? (
        <div className="error">
          {' '}
          <span>Error: </span>
          {abilityState.error.message}
        </div>
      ) : abilityState.data && (
        <div>
          <h2 className="font-h2">{abilityState.data.name}</h2>
          <div>
            <h5 className="font-h5">Description</h5>
            { abilityState.data.effect_entries.map((effect) => (
              <p key={effect.effect}>{effect.effect}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ability;
