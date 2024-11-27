
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <section className='text-white bg-bg-color'>
      <Navbar />
      <Outlet />
      
    </section>
  )
}

export default App
