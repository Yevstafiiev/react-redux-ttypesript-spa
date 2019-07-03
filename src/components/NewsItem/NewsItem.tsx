import * as React from 'react'

import { INewsItem } from '../../models/news'

interface INewsItemProps {
  data: INewsItem;
}

const NewsItem: React.FC<INewsItemProps> = ({
  data: { title, text, timestamp },
}) => {
  return (
    <article>
      <br />
      <div>
        {title}
        {' '}
        | {timestamp.toLocaleDateString()}
      </div>
      <div>{text}</div>
    </article>
  )
}

export { NewsItem }