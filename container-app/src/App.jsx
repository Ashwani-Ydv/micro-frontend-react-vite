// In the container app, dynamically import the MicroApp
import React from 'react';
import './App.css'
const MicroApp = React.lazy(() => import('micro_frontend/MicroApp'));


function App() {
  return (
    <div className='app'>
      <h1>Container App</h1>
      <React.Suspense fallback="Loading Micro Frontend...">
        <MicroApp />
      </React.Suspense>
    </div>
  );
}
export default App
