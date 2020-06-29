import React, {FC} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {Loader} from './Loader';
import {setIsLoading} from '../actions/actions';

interface IProps {
  isLoading: boolean,
}

interface IHandlers {
  dispatch: (arg0: {type: string}) => boolean
}

const withLoader = (WrappedComponent: FC) => {
  const WithLoader: FC<IProps & IHandlers> = ({isLoading, dispatch}) => {

    setTimeout(() => {
      isLoading = dispatch(setIsLoading());
    }, 1000);

    return isLoading ? <Loader /> : <WrappedComponent />;
  };

  return WithLoader;
};

const mapStateToProps = (state: {isLoading: boolean}) => ({
  isLoading: state.isLoading
})

export const composedWithLoader = compose(
  connect(mapStateToProps, null),
  withLoader
)
