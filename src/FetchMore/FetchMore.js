import React from 'react';
import { Loading } from '../Loading';
import './style.css';

const FetchMore = ({
  variables,
  loading,
  hasNextPage,
  updateQuery,
  fetchMore,
  children,
}) => (
    loading ? <Loading /> : (hasNextPage && (
      <div className="FetchMore">
        <button
          type='button'
          className="FetchMore-button"
          onClick={() => fetchMore({
            variables,
            updateQuery,
          })}
        >
          More {children}
        </button>
      </div>
    ))
  );

export default FetchMore;