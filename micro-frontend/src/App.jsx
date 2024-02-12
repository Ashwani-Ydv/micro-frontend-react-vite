import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Micro Frontend with React + Vite
      </header>
      <main className="app-content">
        <div className="card">
          <h2>Card Title 1</h2>
          <p>This is a card. You can use this section to display specific information.</p>
        </div>
        <div className="card">
          <h2>Card Title 2</h2>
          <p>This is another card. Customize it as per your needs.</p>
        </div>
        <div className="card">
          <h2>Card Title 3</h2>
          <p>Use this space to provide more information using another card.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
