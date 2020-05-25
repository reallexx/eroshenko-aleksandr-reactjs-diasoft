import React, {Component, ComponentType} from 'react';

interface IHandlers {
  load?: (key: string) => string
  save?: (key: string, data: string) => void
  remove?: (key: string) => void
}

interface IState {
  localStorageAvailable: boolean,
}

export const withStorage = <P extends object>(WrappedComponent: ComponentType<P & IHandlers>) =>
  class WithStorage extends Component<P & IHandlers, IState> {
    constructor(props: any) {
      super(props);
      this.state = {
        localStorageAvailable: true,
      };
      this.load = this.load.bind(this);
      this.save = this.save.bind(this);
      this.remove = this.remove.bind(this);
    }

    componentDidMount() {
      this.checkLocalStorageExists();
    }

    checkLocalStorageExists() {
      const testKey = 'test';

      try {
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        this.setState({ localStorageAvailable: true });
      } catch(e) {
        this.setState({ localStorageAvailable: false });
      }
    }

    load = (key: string) => {
      if (this.state.localStorageAvailable) {
        return localStorage.getItem(key) || "";
      }
      return "";
    }

    save = (key: string, data: string) => {
      if (this.state.localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    }

    remove = (key: string) => {
      if (this.state.localStorageAvailable) {
        localStorage.removeItem(key);
      }
    }

    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  }
