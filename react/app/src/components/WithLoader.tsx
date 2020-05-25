import React, {Component, ComponentType} from 'react';

import {Loader} from './Loader';

interface IState {
  isLoading: boolean,
}

export const withLoader = <P extends object>(WrappedComponent: ComponentType<P>) =>
  class WithLoader extends Component<P, IState> {
    constructor(props: any) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          isLoading: false,
        });
      }, 1000);
    }

    render() {
      const {isLoading} = this.state;
      return isLoading ? <Loader/> : <WrappedComponent {...this.props as P} />;
    }
  }
