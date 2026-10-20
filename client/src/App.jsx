import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* We add padding to the top so the fixed navbar doesn't cover the Hero */}
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        <Hero />
      </main>
    </div>
  );
}

export default App;