import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  HeaderPage,
  SectionRespositoryInfo,
  RepositoryHeader,
  DivIssues,
} from './style';
import logo from '../../assets/logo.svg';

interface RepositoryParam {
  repositoryParam: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();

  return (
    <>
      <HeaderPage>
        <img src={logo} alt="Githu explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </HeaderPage>
      <SectionRespositoryInfo>
        <img
          src="https://avatars3.githubusercontent.com/u/29411015?s=60&v=4"
          alt="Nome do usuário"
        />
        <div>
          <strong>Nome do repositorio</strong>
          <p>descrição do repositorio</p>
        </div>
      </SectionRespositoryInfo>
      <RepositoryHeader>
        <ul>
          <li>
            <strong>1088</strong>
            <p>Followers</p>
          </li>
          <li>
            <strong>2145</strong>
            <p>Fork</p>
          </li>
          <li>
            <strong>12453</strong>
            <p>blablsdf</p>
          </li>
        </ul>
      </RepositoryHeader>
      <DivIssues>
        <Link to="asdfasf">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          {/* The arrow is an SVG */}
          <FiChevronRight size={20} />
        </Link>
      </DivIssues>
    </>
  );
};

export default Repository;
