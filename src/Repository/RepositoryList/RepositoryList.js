import React from 'react';
import { RepositoryItem } from '../.';

const RepositoryList = ({ repositories }) =>
  repositories.edges.map(({ node }) => (
    <div key={node.id} className={'RepositoryItem'}>
      <RepositoryItem {...node} />
    </div>
  ));

export default RepositoryList;