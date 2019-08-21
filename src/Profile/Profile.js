import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Loading } from '../Loading';
import { RepositoryList, REPOSITORY_FRAGMENT } from '../Repository'
import { ErrorMessage } from '../Error';

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  query($cursor: String) {
    viewer {
      repositories(first: 5, after: $cursor, orderBy: {direction: DESC, field: STARGAZERS}) {
        edges {
          node {
            ...repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;

const Profile = () => {
  return (
    <Query query={GET_REPOSITORIES_OF_CURRENT_USER} notifyOnNetworkStatusChange={true}>
      {({ data, loading, error, fetchMore }) => {

        if (error) return <ErrorMessage error={error} />;

        const { viewer } = data;
        if (!viewer && loading) return <Loading />;

        return (
          <RepositoryList loading={loading} repositories={viewer.repositories} fetchMore={fetchMore} />
        );
      }}
    </Query>
  );
}

export default Profile;