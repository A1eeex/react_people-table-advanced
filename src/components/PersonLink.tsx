import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  person: Person;
};

const PersonLink: React.FC<Props> = ({ person }) => {
  return (
    <Link
      to={`../${person.slug}`}
      className={cn({
        'has-text-danger': person.sex === 'f',
      })}
    >
      {person.name}
    </Link>
  );
};

export default PersonLink;