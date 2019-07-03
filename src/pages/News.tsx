import * as React from 'react'

import { getNews } from '../api/news'
import { NewsItem } from '../components/NewsItem/NewsItem'
import { INewsItem } from '../models/news'

import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { fetchNewsSuccess, fetchNewsError } from '../store/actions/news'
import { State } from '../store/reducers/rootReducers'

const News = (props: RouteComponentProps<any> & StateProps & DispatchProps) => {

  React.useEffect(() => {
    getNews()
      .then(res => {
          try {
            props.fetchNewsSuccess(res.data)
          } catch (err) {
            console.warn('Getting news problem', err)
          }
      })
      .catch(err => {
        console.warn('Getting news problem', err)
      })
  }, [])

  const news: any = props.news

  return (
    
      <div className="news">
        <h1>Hello from News</h1>
        {news.news.map((item: INewsItem) => (
          <NewsItem data={item} key={item.id} />
        ))}
      </div>
  )
}

interface StateProps {
  news: INewsItem[],
}

interface DispatchProps {
  fetchNewsError: (err: Error) => void
  fetchNewsSuccess: (news: INewsItem[]) => void
}

const mapStateToProps = (store: State) => {
  return ({
    news: store.news
  });
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchNewsError: (err: Error) => dispatch(fetchNewsError(err)),
  fetchNewsSuccess: (news: INewsItem[]) => dispatch(fetchNewsSuccess(news)),
})

export default connect<StateProps, DispatchProps, RouteComponentProps<any>, any>(mapStateToProps, mapDispatchToProps)(News)