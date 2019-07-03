import * as React from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router'
import Menu from './components/Menu/Menu'
import routes from './routes'

import './App.css';

interface IAppProps {
  history: History;
}

const App = ({ history }: IAppProps) => {

    return (
      <ConnectedRouter history={history}>
        <Menu />
        <hr />
        <div className="page">
          { routes }
        </div>
      </ConnectedRouter>
    );
}

export { App };
