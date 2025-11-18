import CuentaPage from "./CuentaPage/CuentaPage"
import LoginPage from "./LoginPage/LoginPage"
import HistorialTransaccionesPage from "./HistorialTransaccionesPage/HistorialTransaccionesPage"
import RealizarTransferenciaPage from "./RealizarTransferenciaPage/RealizarTransferenciaPage"
import CrearCuentaPage from "./CrearCuentaPage/CrearCuentaPage"
import AnadirFondosPage from "./AnadirFondosPage/AnadirFondosPage"
import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/account" element={<CuentaPage />} />
      <Route path="/transaction" element={<HistorialTransaccionesPage />} />
      <Route path="/transference" element={<RealizarTransferenciaPage />} />
      <Route path="/register" element={<CrearCuentaPage />} />
      <Route path="/addCount" element={<AnadirFondosPage />} />
    </Routes>
  )
}

export default App
