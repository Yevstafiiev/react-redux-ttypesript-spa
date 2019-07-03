import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'

import { newsReducer } from './news'
import { INewsItem } from '../../models/news'

export const rootReducers = (history: History) => combineReducers({
  news: newsReducer,
  router: connectRouter(history)
});

export interface State {
  news: INewsItem[],
  router: RouterState
}