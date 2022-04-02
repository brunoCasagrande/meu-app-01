import React, { useState } from 'react';
import UsuarioList from './UsuariosList';

function Usuarios() {

    let usuariosList = [
        { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
        { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
    ]
    const [usuarios, setUsuarios] = useState(usuariosList)

    const onClickAtualizar = () => {
        usuariosList = [
            { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
            { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
            { id: 3, nome: 'ciclano', email: 'ciclano@teste', celular: '54 6565 4524' }
        ];
        setUsuarios(usuariosList);
    }
    
    const initialState = { id: null, nome: '', email: '', celular: '' }
    const [usuario, setUsuario] = useState(initialState)
    const [editando, setEditando] = useState(false)
    const inserir = () => {
        setUsuario(initialState);
        setEditando(true);
    }
    const salvar = () => {
        console.log('Salvar ...');
        setEditando(false);
    }
    const cancelar = () => {
        console.log('Cancelou ...');
        setEditando(false);
    }

    return (
        <div>
            <UsuarioList usuarios={usuarios} onClickAtualizar={onClickAtualizar} />
        </div>
    );
}

export default Usuarios;