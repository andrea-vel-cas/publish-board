import React from 'react';
import 'tabler-react/dist/Tabler.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Site } from 'tabler-react';
import HomePage from './pages/HomePage';
import ByFeedPage from './pages/ByFeedPage';
import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Site>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/by-feed" component={ByFeedPage} exact />
            <Route path="/about" component={About} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Site>
  );
}

export default App;
