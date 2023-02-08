import React from 'react';

import './App.css';
import { CanvasRendering } from './components/CanvasRendering';
import { Skeleton } from './components/Skeleton';

function App() {
  return (
    <div className="App">
      <Skeleton />
      {/* <CanvasRendering/> */}
    </div>
  );
}

export default App;
