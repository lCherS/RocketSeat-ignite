import { useState, useEffect } from 'react';
import {RepositoryItem} from './RepositoryItem';

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

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
        {reps.map(repository => {
        return <RepositoryItem key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  );
}
