import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ColaboradorList from './ColaboradorList';
import ColaboradoresForm from './ColaboradoresForm';

function Colaborador() {
  // Declare variáveis de state
  let colaboradoresList = [
    { id: 1, nome: 'Fulano', email: 'email1@teste', senha: '5454' },
    { id: 2, nome: 'Beltrano', email: 'email2@teste', senha: '5454' },
  ]
  const [colaboradores, setColaboradores] = useState(colaboradoresList)

  const onClickAtualizar = () => {
    colaboradoresList = [
      { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
      { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
      { id: 3, nome: 'ciclano', email: 'ciclano@teste', celular: '54 6565-9898' }
    ];
    setColaboradores(colaboradoresList);
  }

  // operação inserir
  const initialState = { id: null, nome: '', email: '', celular: '' }
  const [colaborador, setColaborador] = useState(initialState)
  const [editando, setEditando] = useState(false)

  const onClickInserir = () => {
    setColaborador(initialState);
    setEditando(true);
  }

  const onClickSalvar = () => {
    console.log('Salvar ...');
    if (colaborador.id == null) { // inclussão
      colaborador.id = colaboradores.length + 1
      setColaborador([...colaboradores, colaborador])
    } else { // alteração
      setcolaboradoress(colaboradores.map((find) => (find.id === colaborador.id ? colaborador : find)))
    }
    setEditando(false);
  }
  const onClickCancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }
  const editar = (id) => {
    setColaborador(colaborador.filter((colaborador) => colaborador.id == id)[0]);
    setEditando(true);
  }
  const excluir = (id) => {
    setColaboradores(colaborador.filter((colaborador) => colaborador.id !== id));
  }


  if (!editando) {
    return (
      <div>
        <ColaboradorList colaborador={colaborador}
          onClickAtualizar={onClickAtualizar}
          onClickInserir={onClickInserir} editar={editar} excluir={excluir}/>
      </div >
    );
  } else {
    return (
      <div>
        <colaboradorForm colaborador={colaborador} setColaborador={setColaborador}
          onClickSalvar={onClickSalvar}
          onClickCancelar={onClickCancelar} />
      </div >
    );
  }



}

export default Usuarios;