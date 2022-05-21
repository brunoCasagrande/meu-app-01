import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';

function Menu() {
  let navigate = useNavigate();

  const items = [
    {
      label: 'Home', icon: 'pi pi-home',
      command: () => { navigate("/") }
    },
    {
      label: 'Colaboradores', icon: 'pi pi-id-card',
      command: () => { navigate("/colaborador") }
    },
    {
      label: 'Solicitantes', icon: 'pi pi-id-card',
      command: () => { navigate("/solicitantes") }
    },
    {
      label: 'TipoRequisicoes', icon: 'pi pi-id-card',
      command: () => { navigate("/tipoRequisicoes") }
    },
  ];

  return (<Menubar model={items} />)
}

export default Menu;