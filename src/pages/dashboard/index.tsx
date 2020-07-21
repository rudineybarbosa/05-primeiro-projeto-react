import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
/* Options to decare a new function:

  1. const Dashboard = () => {...}
  2. function Daschboard () {...}

  Both are the same declaration.
  We will choose the first one because it is more easy to apply types, as we are using TypeScript. To do so, we just need to write the type after the name. Exemple:

    const Dashboard:TypeOfDashboard = () {...}

*/

import logo from '../../assets/logo.svg';

import { TitleStyled, FormStyled, DivRepositoriesStyled } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Githu explorer" />
      <TitleStyled>Explore Respositórios no Github</TitleStyled>

      <FormStyled>
        <input placeholder="Digite o nome do Repositório" />
        <button type="submit">Pesquisar</button>
      </FormStyled>

      <DivRepositoriesStyled>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29411015?s=460&u=d964259f6195bc975f1cbed2b2cce435cc2bcbbc&v=4"
            alt="Rudiney Barbosa"
          />
          <div>
            <strong>rudineybarbosa/repositoryManagement</strong>
            <p>Little project to study Node and ReactJS</p>
          </div>

          {/* This arrow is an SVG */}
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29411015?s=460&u=d964259f6195bc975f1cbed2b2cce435cc2bcbbc&v=4"
            alt="Rudiney Barbosa"
          />
          <div>
            <strong>rudineybarbosa/repositoryManagement</strong>
            <p>Little project to study Node and ReactJS</p>
          </div>

          {/* This arrow is an SVG */}
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29411015?s=460&u=d964259f6195bc975f1cbed2b2cce435cc2bcbbc&v=4"
            alt="Rudiney Barbosa"
          />
          <div>
            <strong>rudineybarbosa/repositoryManagement</strong>
            <p>Little project to study Node and ReactJS</p>
          </div>

          {/* This arrow is an SVG */}
          <FiChevronRight size={20} />
        </a>
      </DivRepositoriesStyled>
    </>
  );
};

export default Dashboard;
