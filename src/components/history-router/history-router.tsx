import { ReactNode, useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import type { BrowserHistory } from 'history';

type HistoryRouterProps = {
  history: BrowserHistory;
  basename?: string;
  children?: ReactNode;
}

const HistoryRouter = ({ basename, children, history }: HistoryRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export default HistoryRouter;
