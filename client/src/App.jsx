import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* We add padding to the top so the fixed navbar doesn't cover the Hero */}
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;