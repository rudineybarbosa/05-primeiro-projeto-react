/* eslint-disable camelcase */

import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

import {
  TitleStyled,
  FormStyled,
  DivRepositoriesStyled,
  ErrorStyled,
} from './style';
/* Options to decare a new function:

  1. const Dashboard = () => {...}
  2. function Daschboard () {...}

  Both are the same declaration.
  We will choose the first one because it is more easy to apply types, as we are using TypeScript. To do so, we just need to write the type after the name. Exemple:

    const Dashboard:TypeOfDashboard = () {...}

*/
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const [newRepository, setNewRepository] = useState('');

  const [inputError, setInputError] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite o nome do autor/nome do repositório');

      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepository('');

      setInputError('');
    } catch (error) {
      setInputError('Nome do autor e/ou repositório inválidos');

      setNewRepository('');
    }
  }

  return (
    <>
      <img src={logo} alt="Githu explorer" />
      <TitleStyled>Explore Respositórios no Github</TitleStyled>

      <FormStyled hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepository}
          onChange={e => setNewRepository(e.target.value)}
          placeholder="Digite o nome do Repositório"
        />
        <button type="submit">Pesquisar</button>
      </FormStyled>
      {inputError && <ErrorStyled>{inputError}</ErrorStyled>}

      <DivRepositoriesStyled>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            {/* The arrow is an SVG */}
            <FiChevronRight size={20} />
          </a>
        ))}
      </DivRepositoriesStyled>
    </>
  );
};

export default Dashboard;
