import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom'
import { checkAuthStatus, logout } from '../../api/auth';

import './Menu.sass'
import './Menu.scss'


const goTo = (route: string, props: RouteComponentProps): any => {
  props.history.replace(`/${route}`)
}

const Menu = (props: RouteComponentProps) => {

    return (
      <div className="menu">
          <button
            className="button__menu"
            onClick={() => goTo('home', props)}
          >
            Home
          </button>
          <button
            className="button__menu"
            onClick={() => goTo('news', props)}
          >
            News
          </button>
          {
            checkAuthStatus() && (
              <button
                className="button__menu"
                onClick={() => goTo('profile', props)}
              >
                Profile
              </button>
            )
          }
          {
            !checkAuthStatus() && (
                <button
                  className="button__menu"
                  onClick={() => goTo('login', props)}
                >
                  Log in
                </button>
            )
          }
          {
            checkAuthStatus() && (
                <button
                  className="button__menu"
                  onClick={() => logout()}
                >
                  Log out
                </button>
              )
          }
      </div>
    );
  
}

export default withRouter(Menu);