import React from 'react';
import 'tabler-react/dist/Tabler.css';

import { BrowserRouter, Route } from 'react-router-dom';
import { Site } from 'tabler-react';
import HomePage from './pages/HomePage';
import Header from './pages/Header';

function App() {
  return (
    <Site>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" component={HomePage} exact />
        </div>
      </BrowserRouter>
    </Site>
  );
}

export default App;
