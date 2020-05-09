import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';

import './LinkArrow.scss';

type linkArrow = {
  link: string;
}

type buttonArrow = {
  onClick: () => void;
}

export const LinkArrow: React.FC<linkArrow> = ({ link }) => (
  <Link to={link} className="link-arrow">
    <ArrowIcon className="link-arrow__icon" />
    Back
  </Link>
);

export const ButtonArrow: React.FC<buttonArrow> = ({ onClick }) => (
  <button type="button" className="link-arrow" onClick={onClick}>
    <ArrowIcon className="link-arrow__icon" />
    Back
  </button>
);
