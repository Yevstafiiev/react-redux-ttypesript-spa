import { INewsItem } from '../../models/news';

export type Action =
  | { type: '' }
  | { type: 'fetchNewsSuccess'; payload: INewsItem[] | [] }
  | { type: 'fetchNewsError'; payload: Error }

export const fetchNewsSuccess = (payload: INewsItem[]) => ({
  type: 'fetchNewsSuccess',
  payload: payload
})

export const fetchNewsError = (err: Error) => ({
  type: 'fetchNewsError',
  payload: err
})