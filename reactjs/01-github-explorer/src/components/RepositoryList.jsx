import { useState, useEffect } from 'react';
import {RepositoryItem} from './RepositoryItem';

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: 'rep',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform',
}

export function RepositoryList() {
  const [reps, setReps] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(res => res.json())
    .then(data => setReps(data))
     
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
