/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  HeaderPage,
  SectionRepositoryInfo,
  RepositoryHeader,
  DivIssues,
} from './style';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParam {
  repositoryParam: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}
interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`/repos/${params.repositoryParam}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repositoryParam}/issues`).then(response => {
      setIssues(response.data);
    });
  }, [params.repositoryParam]);

  return (
    <>
      <HeaderPage>
        <img src={logo} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </HeaderPage>

      {repository && (
        <>
          <SectionRepositoryInfo>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </SectionRepositoryInfo>
          <RepositoryHeader>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <p>Stars</p>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <p>Forks</p>
              </li>
              <li>
                <strong>{repository.open_issues_count}</strong>
                <p>Issues abertas</p>
              </li>
            </ul>
          </RepositoryHeader>
        </>
      )}

      <DivIssues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url} target="_blanck">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            {/* The arrow is an SVG */}
            <FiChevronRight size={20} />
          </a>
        ))}
      </DivIssues>
    </>
  );
};

export default Repository;
