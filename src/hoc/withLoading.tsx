import React from 'react';
import { CircularProgress } from '@mui/material';

const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class extends React.Component<P & { loading: boolean }> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? (
        <CircularProgress />
      ) : (
        <WrappedComponent {...(props as P)} />
      );
    }
  };
};

export default withLoading;
