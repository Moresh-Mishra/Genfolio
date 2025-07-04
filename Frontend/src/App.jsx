import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => (
  <>
  <Router>
    <div className="App">
      <AnimatedRoutes />
    </div>
  </Router>
  </>
);

export default App;