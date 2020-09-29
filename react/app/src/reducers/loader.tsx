export const isLoading = (state: boolean = true, action: {type: string; isLoading: boolean}) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const isError = (state: boolean = false, action: {type: string; isError: boolean}) => {
  switch (action.type) {
    case 'SET_IS_ERROR':
      return action.isError;
    default:
      return state;
  }
};
