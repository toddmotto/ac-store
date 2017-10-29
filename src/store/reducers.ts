import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  todos: [{ label: 'Eat pizza', complete: true }],
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const todos = [...state.todos, todo];
      return {
        ...state,
        todos,
      };
    }
  }

  return state;
}
