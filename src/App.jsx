import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import { HoroscopeProvider } from './componants/datas';

function App() {
  return(
    <Router>
      <HoroscopeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HoroscopeProvider>
    </Router>
  );
}
export default App;