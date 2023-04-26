import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navpanel from './components/Navpanel';
import BitcoinPage from './pages/BitcoinPage';
import EtheriumPage from './pages/EtheriumPage';

function App() {


  return (
    <div className="App">
      <Navpanel />
        <Routes>
          <Route path='/test-homepage' element={<HomePage />} />
          <Route path='/test-homepage/bitcoin' element={<BitcoinPage />} />
          <Route path='/test-homepage/etherium' element={<EtheriumPage />} />

          <Route path='*' element={<Navigate to={'/test-homepage'} replace/>} />
        </Routes>
    </div>
  );
}

export default App;
