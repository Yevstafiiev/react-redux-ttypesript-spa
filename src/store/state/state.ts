import { applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import { createStore } from 'react-hooks-global-state';
import { reduxDevToolsExt } from 'react-hooks-global-state/src/devtools';

import { initialState } from '../reducers/news'
import { rootReducers } from '../reducers/rootReducers'

export const state = (): any => {
  return null;
}
