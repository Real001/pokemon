import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';

import './LinkArrow.scss';

interface LinkArrowProps {
  link: string;
}

interface ButtonArrowProps {
  onClick: () => void;
}

export const LinkArrow: React.FC<LinkArrowProps> = ({ link }) => (
  <Link to={link} className="link-arrow">
    <ArrowIcon className="link-arrow__icon" />
    Back
  </Link>
);

export const ButtonArrow: React.FC<ButtonArrowProps> = ({ onClick }) => (
  <button type="button" className="link-arrow" onClick={onClick}>
    <ArrowIcon className="link-arrow__icon" />
    Back
  </button>
);
