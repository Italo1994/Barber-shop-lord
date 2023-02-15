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
import { Horarios } from './pages/horarios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/agendamento" element={ <Agendamento /> } />
        <Route path="/cadastro" element={ <Cadastro /> } />
        <Route path="/horarios/:nome" element={ <Horarios /> } />
      </Routes>
    </Router>
  );
}

export default App;
