import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

import { Login } from './pages/login';
import { Home } from './pages/home';
import { Agendamento } from './pages/agendamento';
import { Cadastro } from './pages/cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/agendamento" element={ <Agendamento /> } />
        <Route path="/cadastro" element={ <Cadastro /> } />
      </Routes>
    </Router>
  );
}

export default App;
