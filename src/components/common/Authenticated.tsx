import * as React from 'react'

import { Redirect, RouteComponentProps } from 'react-router-dom'

import { checkAuthStatus } from '../../api/auth'

const Authenticated: React.FC<RouteComponentProps> = ({ children }) => {
  return checkAuthStatus() ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Redirect to='/login' />
  )
}

export { Authenticated }