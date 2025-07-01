import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import History from "./components/History";
import UserForm from "./components/UserForm";
import Selection from './components/Selection';
import Minimalist from './templates/Minimalist';
import Creative from './templates/Creative';
import Corporate from './templates/Corporate';
import Developer from './templates/Developer';
import Login from './auth/Login';


const App = () => (
  <Router>
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/history" element={<History />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/style" element={<Selection />} />
        <Route path="/minimalist" element={<Minimalist />} />
        <Route path="/creative" element={<Creative />} />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/developer' element={<Developer />} />
        <Route path='/login' element={<Login />} />

        {/* Dynamic portfolio routes with UUID */}
        <Route path="/minimalist/:portfolioId" element={<Minimalist />} />
        <Route path="/creative/:portfolioId" element={<Creative />} />
        <Route path="/corporate/:portfolioId" element={<Corporate />} />
        <Route path="/developer/:portfolioId" element={<Developer />} />
      </Routes>
    </div>
  </Router>
);

export default App;