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
      label: 'Andamento', icon: 'pi pi-id-card',
      command: () => { navigate("/andamento") }
    },
    {
      label: 'Atividades', icon: 'pi pi-id-card',
      command: () => { navigate("/atividade") }
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
    {
      label: 'Sair', icon: 'pi pi-sign-out',
      command: () => {
        sessionStorage.setItem('token',
          '');
      },
      url: '/'
    },

  ];

  return (<Menubar model={items} />)
}

export default Menu;