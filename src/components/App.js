import { Outlet } from 'react-router-dom'
import Title from './Title/Title';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <div className='outletWrapper'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
