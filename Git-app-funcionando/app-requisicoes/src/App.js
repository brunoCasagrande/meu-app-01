import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';

const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));
const SolicitanteCon = lazy(() => import('./pages/solicitante/SolicitanteCon'));
const TipoRequisicaoCon = lazy(() => import('./pages/TipoRequisicao/TipoRequisicaoCon'));


function App() {

  return (
    <BrowserRouter>
      <Menu/>      

      <Suspense fallback={<div>Carregando ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaborador" element={<ColaboradorCon />} />
          <Route path="/solicitantes" element={<SolicitanteCon />} />
          <Route path="/tipoRequisicoes" element={<TipoRequisicaoCon />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );

}
export default App;
