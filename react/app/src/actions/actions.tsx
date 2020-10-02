import {Dispatch} from 'redux';

import axios from 'axios';

const URL = 'http://localhost:3000/api/';

export const addTodo = (caption: string) => {
  return async (dispatch: Dispatch) => {
    return axios
      .post(URL, {
        id: Math.random(),
        caption: caption,
        done: false,
        date: new Date().toLocaleDateString(),
      })
      .then((response) => {
        dispatch({type: 'LOAD', data: response.data});
      })
      .catch(() => {
        dispatch({type: 'SET_IS_ERROR', isError: true});
      });
  };
};

export const toggleTodo = (id: number) => {
  return async (dispatch: Dispatch) => {
    return axios
      .put(`${URL}${id}`, {
        id: id,
      })
      .then(() => {
        axios
          .get(URL)
          .then((response) => {
            dispatch({type: 'LOAD', data: response.data});
          })
          .catch(() => {
            dispatch({type: 'SET_IS_ERROR', isError: true});
          });
      })
      .catch(() => {
        dispatch({type: 'SET_IS_ERROR', isError: true});
      });
  };
};

export const removeTodo = (id: number) => {
  return async (dispatch: Dispatch) => {
    return axios
      .delete(`${URL}${id}`)
      .then((response) => {
        dispatch({type: 'LOAD', data: response.data});
      })
      .catch(() => {
        dispatch({type: 'SET_IS_ERROR', isError: true});
      });
  };
};

export const load = () => {
  return async (dispatch: Dispatch) => {
    return axios
      .get(URL)
      .then((response) => {
        dispatch({type: 'LOAD', data: response.data});
      })
      .catch(() => {
        dispatch({type: 'SET_IS_ERROR', isError: true});
      })
      .then(() => {
        dispatch({type: 'SET_IS_LOADING', isLoading: false});
      });
  };
};

export const getTodo = (id: string) => {
  return (dispatch: Dispatch) => {
    return axios
      .get(`${URL}${id}`)
      .then((response) => {
        dispatch({type: 'GET_TODO', data: response.data});
      })
      .catch(() => {
        dispatch({type: 'SET_IS_ERROR', isError: true});
      });
  };
};
