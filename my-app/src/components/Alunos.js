import React from "react"
import Table from 'react-bootstrap/Table';

class Alunos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alunos: [
                { 'id': 1, 'nome': 'Luiz Fernando', 'email': 'luiz@fernando.com' },
                { 'id': 2, 'nome': 'João Paulo', 'email': 'joao@paulo.com' },
                { 'id': 3, 'nome': 'Yuri Alec', 'email': 'yuri@alec.com' },
            ]
        }
    }

    render() {
        return (
            <div className='container'>
                <h1>Alunos</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {this.state.alunos.map((aluno) =>
                            <tr>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                <td>Editar Excluir</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Alunos