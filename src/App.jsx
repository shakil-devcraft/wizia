
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <section className='text-white bg-bg-color'>
      <Navbar />
      <div className='min-h-[calc(100vh-201px)]'>
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}

export default App
