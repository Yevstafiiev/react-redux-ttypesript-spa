import * as React from 'react'

import { RouteComponentProps } from 'react-router-dom'

import { authenticate, checkAuthStatus } from '../api/auth'
import { IUserIdentity } from '../models/user'

const Login = (props: RouteComponentProps) => {

  const [user, setField] = React.useState<IUserIdentity>({
    username: '',
    password: '',
  })

  const [notification, setNotification] = React.useState<string>('')

  const onInputChange = (fieldName: string) => (
    e: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setField({
      ...user,
      [fieldName]: e.currentTarget.value,
    })
    setNotification('')
  }

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()
    authenticate(user)
      .then(() => {
        props.history.push('/profile')
      })
      .catch(err => {
        if (err.errorText) {
          setNotification(err.errorText)
        } else {
          console.warn('request problem', err)
        }
      })
  }

  return (
    
      <div>
        {
          checkAuthStatus() && (
            props.history.push('/home')
          )
        }
        {
          !checkAuthStatus() && (
            <>
              <h2>Login</h2>
              <form onSubmit={onSubmit}>
                {notification ? <p>{notification}</p> : null}
                <input
                  type="text"
                  placeholder='login'
                  value={user.username}
                  onChange={onInputChange('username')}
                />
                <input
                  type="password"
                  placeholder='password'
                  value={user.password}
                  onChange={onInputChange('password')}
                />
                <button>Log in</button>
              </form>
            </>
          )
        }        
      </div>    
  )
}

export { Login }