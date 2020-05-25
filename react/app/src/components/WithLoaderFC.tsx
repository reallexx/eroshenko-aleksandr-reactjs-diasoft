import React, {FC, useState, useEffect} from 'react';

import {Loader} from './Loader';

export const withLoaderFC = (WrappedComponent: FC) => {
  const WithLoader: FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (isLoading) {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    });

    return isLoading ? <Loader /> : <WrappedComponent />;
  };

  return WithLoader;
};
