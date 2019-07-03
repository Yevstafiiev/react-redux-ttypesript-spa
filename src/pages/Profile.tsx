import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { checkAuthStatus } from '../api/auth'

interface IAboutProps extends RouteComponentProps<{ source?: string }> {

}

const Profile: React.FC<IAboutProps> = props => {
  return (
    <div>
      {
        !checkAuthStatus() && (
          props.history.push('/login')
        )
      }
      <h1>Profile</h1>
      <p>{ props.match.params.source }</p>
    </div>
  );
}

export { Profile };