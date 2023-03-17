import React from 'react';
import useWindowWidth from './components/UseWindowWidth';

function App() {
  const width = useWindowWidth();

  return (
    <div>
      <h1>useDebugValue Example</h1>
      <p>Window width: {width}px</p>
    </div>
  );
}

export default App;
