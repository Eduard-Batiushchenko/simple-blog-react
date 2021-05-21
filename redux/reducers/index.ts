import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import posts from './postsReducer';

const rootReducer = combineReducers({
  posts,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

// export const reducer = (state: State = { tick: 'init' }, action: AnyAction) => {
//   switch (action.type) {
//     case HYDRATE:
//       return {
//         ...state,
//         server: {
//           ...state.server,
//           ...action.payload.server,
//         },
//       };
//     case 'SERVER_ACTION':
//       return {
//         ...state,
//         server: {
//           ...state.server,
//           tick: action.payload,
//         },
//       };
//     case 'CLIENT_ACTION':
//       return {
//         ...state,
//         client: {
//           ...state.client,
//           tick: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

export type RootState = ReturnType<typeof rootReducer>;
