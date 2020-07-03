export const isLoading = (state: boolean = true, action: {type: string}) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return false;
    default:
      return state;
  }
};
