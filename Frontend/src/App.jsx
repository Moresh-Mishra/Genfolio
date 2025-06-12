import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;