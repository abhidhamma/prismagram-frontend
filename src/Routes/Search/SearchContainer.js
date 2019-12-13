import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import SearchPresenter from './SrearchPresenter';
import { useQuery } from 'react-apollo-hooks';
import { SEARCH } from './SrearchQueries';

export default withRouter(({ location: { search } }) => {
  const term = search.split('=')[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term,
    },
  });
  console.log(data);
  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
});
