import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      {/* We render our new Navbar component here */}
      <Navbar />
      
      {/* We add padding to the top so the fixed navbar doesn't cover our text */}
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        <div className="container">
          <h1 className="gradient-text" style={{ fontSize: 'var(--text-6xl)', marginTop: 'var(--space-16)' }}>
            The Dev Diary of Kevin M. Khisa
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
            Portfolio coming soon...
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;