import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SplashScreen from './screens/splash/SplashScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SplashScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
