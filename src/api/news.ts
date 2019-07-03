import { INewsItem } from '../models/news'

interface INewsResponse {
  status: number;
  data: INewsItem[];
  errorText?: string;
}

const fakeData = [
  {
    id: 1,
    title: 'News mok 1',
    text: 'some text',
    timestamp: new Date('2019-07-03'),
  },
  {
    id: 2,
    title: 'News mok 2',
    text: 'hello hello hello',
    timestamp: new Date('2019-07-03'),
  },
  {
    id: 3,
    title: 'News mok 3',
    text: 'some txt3',
    timestamp: new Date('2019-07-03'),
  },
]

export const getNews = (): Promise<INewsResponse> => {
  const promise = new Promise<INewsResponse>(resolve => {
    resolve({
      status: 200,
      data: fakeData,
    })
  })

  return promise
}