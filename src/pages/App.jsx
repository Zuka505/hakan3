import './App.css';
import QuienesSomos from './QuinesSomos';
import Accion from './Accion';
import Proyecto from './Proyecto';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<QuienesSomos />} />
      <Route path="/accion" element={<Accion />} />
      <Route path="/proyecto" element={<Proyecto />} />
    </Routes>
  );
}

export default App;
