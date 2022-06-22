import "./App.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';
import Login from './pages/login/LoginForm';

const Home = lazy(() => import('./pages/home/Home'));

const AndamentoCon = lazy(() => import('./pages/andamento/AndamentoCon'));
const AtividadeCon = lazy(() => import('./pages/atividade/AtividadeCon'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));
const SolicitanteCon = lazy(() => import('./pages/solicitante/SolicitanteCon'));
const TipoRequisicaoCon = lazy(() => import('./pages/tipoRequisicao/TipoRequisicaoCon'));


function App() {
  /** 
  const [token, setToken] = useState([])
  useEffect(() => {
    setToken(sessionStorage.getItem('token'));
  }, []);

  if (!token || token <= '') {
    return <Login/>
  }
*/
  return (
    <BrowserRouter>
      <Menu />

      <Suspense fallback={<div>Carregando ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atividade" element={<AtividadeCon />} />
          <Route path="/andamento" element={<AndamentoCon />} />
          <Route path="/colaborador" element={<ColaboradorCon />} />
          <Route path="/solicitantes" element={<SolicitanteCon />} />
          <Route path="/tipoRequisicoes" element={<TipoRequisicaoCon />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );

}
export default App;
