import React from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alunos: []
        }
    }

    componentDidMount() {
        this.buscarAluno();
    }

    buscarAluno = () => {
        fetch("http://localhost:8000/api/listar_alunos")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ alunos: dados.data })
            })
    }

    deletarAluno = (id) => {
        fetch("http://localhost:8000/api/apagar_aluno/" + id, { method: 'DELETE' })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarAluno();
                }
            })
    }

    render() {
        return (
            <div className='container'>
                <h1>Home</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {this.state.alunos.map((aluno) =>
                            <tr>
                                <td>{aluno.id}</td>
                                <td>{aluno.name}</td>
                                <td>{aluno.course}</td>
                                <td>{aluno.email}</td>
                                <td>
                                    <Link to={"/editar_aluno/" + aluno.id}><Button variant="warning">Editar</Button></Link> 
                                    <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)}>Excluir</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Home