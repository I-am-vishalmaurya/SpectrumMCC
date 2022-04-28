import './App.css';
import Calendar from './components/Calendar';
import Hero from './components/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='bg-indigo-600 w-full h-screen'>
        <Hero />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
