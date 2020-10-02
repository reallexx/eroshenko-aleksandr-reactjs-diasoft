import configureMockStore, {MockStoreEnhanced} from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions/actions';
import moxios from 'moxios';
import expect from 'expect';

const mockStore = configureMockStore([thunk]);

const initialState = {
  todos: [],
  todo: {},
  isLoading: true,
  isError: false,
};

const todo = {
  id: 1,
  caption: 'Поесть',
  done: false,
  date: '01.01.2000',
};

const todos = [todo];

describe('test actions', () => {
  let store: MockStoreEnhanced<unknown, {}>;
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('load todos success', async (done) => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        response: todos,
      });
    });

    const expectedActions = [
      {
        type: 'LOAD',
        data: todos,
      },
      {
        type: 'SET_IS_LOADING',
        isLoading: false,
      },
    ];
    store.dispatch<any>(actions.load()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it('load todos error', async (done) => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {message: 'Not found'},
      });
    });

    const expectedActions = [
      {
        type: 'SET_IS_ERROR',
        isError: true,
      },
      {
        type: 'SET_IS_LOADING',
        isLoading: false,
      },
    ];
    store.dispatch<any>(actions.load()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it('get todo success', async (done) => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        response: todo,
      });
    });

    const expectedActions = [
      {
        type: 'GET_TODO',
        data: todo,
      },
    ];
    store.dispatch<any>(actions.getTodo('1')).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it('get todo error', async (done) => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {message: 'Invalid data'},
      });
    });

    const expectedActions = [
      {
        type: 'SET_IS_ERROR',
        isError: true,
      },
    ];
    store.dispatch<any>(actions.getTodo('1')).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
});
