import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParam {
  repositoryParam: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParam>();

  return <h1>Respository: {params.repositoryParam}</h1>;
};

export default Repository;
