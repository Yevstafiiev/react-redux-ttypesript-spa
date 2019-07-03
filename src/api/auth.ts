import { IUserIdentity } from '../models/user'

interface IAuthResponse {
  status: number;
  data?: any;
  errorText?: string;
}

const checkCredentials = (data: IUserIdentity): boolean => {
  if (data.username === 'Admin' && data.password === '12345') {
    return true
  } else {
    return false
  }
}

export const authenticate = (data: IUserIdentity): Promise<IAuthResponse> => {
  const promise = new Promise<IAuthResponse>((resolve, reject) => {
    if (!checkCredentials(data)) {
      reject({
        status: 500,
        errorText: 'wrong login or password',
      })
    }
    else {
      window.localStorage.setItem('tstz.authenticated', 'true')
      resolve({
        status: 200,
        data: 'ok',
      })
    }
  })

  return promise
}

export const checkAuthStatus = (): boolean => {
  const isAuthenticated = localStorage.getItem('tstz.authenticated')
  if (isAuthenticated === 'true') {
    return true
  } else {
    return false
  }
}

export const logout = (): void => {
  window.localStorage.removeItem('tstz.authenticated')
  window.location.href = '/'
}