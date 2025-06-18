import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import UserForm from "./components/UserForm";
import Selection from './components/Selection';
import Minimalist from './templates/Minimalist';
import Creative from './templates/Creative';
import Corporate from './templates/Corporate';
import Developer from './templates/Developer';


const App = () => (
  <Router>
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/style" element={<Selection />} />
        <Route path="/minimalist" element={<Minimalist />} />
        <Route path="/creative" element={<Creative />} />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/developer' element={<Developer />} />
      </Routes>
    </div>
  </Router>
);

export default App;