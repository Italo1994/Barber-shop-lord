import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

import { Login } from './pages/login';
import { Home } from './pages/home';
import { Agendamento } from './pages/agendamento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/agendamento" element={ <Agendamento /> } />
      </Routes>
    </Router>
  );
}

export default App;
