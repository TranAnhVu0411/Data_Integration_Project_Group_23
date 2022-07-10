import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Home from './component/Home';
import Search from './component/Search';
import RootRoutes from './router';

function App() {
  return (
      <div className="App">
        <RootRoutes />
      </div>
  );
}

export default App;
