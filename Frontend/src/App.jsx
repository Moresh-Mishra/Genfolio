import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import UserForm from "./components/UserForm";
import Customize from "./components/Customize";

const App = () => (
  <Router>
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/style" element={<Customize />} />
      </Routes>
    </div>
  </Router>
);

export default App;