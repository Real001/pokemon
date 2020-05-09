import React, { useState } from 'react';
import classnames from 'classnames';
import { ReactComponent as LoupeIcon } from '../../assets/icons/loupe.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/clear.svg';

import './InputSearch.scss';

interface InputSearchComponent {
  onSearch: (value: string) => void;
}

const InputSearch: React.FC<InputSearchComponent> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const classLabel = classnames('input-search__label', {
    'input-search__label--active': value,
  });

  const classClear = classnames('input-search__button', {
    'input-search__button--not-show': !value,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSearch = (event: React.MouseEvent<Element>): void => {
    event.preventDefault();
    onSearch(value);
  };

  const handleClear = (): void => {
    setValue('');
    onSearch('');
  };

  return (
    <form className="input-search">
      <div className="input-search__field">
        <input id="search" name="search" className="input-search__input" value={value} onChange={handleOnChange} />
        <span className={classLabel}>Search pokemon</span>
      </div>
      <div className="input-search__buttons">
        <button type="button" className={classClear} onClick={handleClear}>
          <ClearIcon className="input-search__button__icon input-search__button__icon__clear" />
        </button>
        <button type="submit" className="input-search__button" onClick={handleSearch}>
          <LoupeIcon className="input-search__button__icon" />
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
