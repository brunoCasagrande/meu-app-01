import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function UsuariosList(props) {
    return (
        <div>
            <h4>MANUTENÇÃO DE COLABORADORES</h4>

            <button onClick={props.onClickAtualizar} type="button"
                class="btn btn-primary btn-sm">Atualizar Lista</button>

            <button onClick={props.onClickInserir} type="button"
                class="btn btn-primary btn-sm">Inserir</button>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>

                    </tr>
                </thead>
                <tbody>
                    {props.usuarios.length > 0 ? (props.usuarios.map((o, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{o.id}</td>
                            <td>{o.nome}</td>
                            <td>{o.email}</td>
                            <td>{o.celular}</td>
                            <td>
                                <button onClick={() => props.editar(o.id)} className="btn btn-primary btn-sm">Editar</button>
                                <button onClick={() => props.excluir(o.id)} className="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={3}>Nenhum usuário.</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div >
    );
}

export default ColaboradorList;