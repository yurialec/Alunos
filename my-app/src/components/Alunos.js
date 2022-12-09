import { createBrowserHistory } from "@remix-run/router";
import React from "react"
import { Button, Form } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

class Alunos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        }
    }

    cadastrarAluno = (aluno) => {
        fetch("http://localhost:8000/api/cadastrar_aluno/",
            {
                method: 'POST',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(aluno)
            })
            .then(resposta => {
                if (resposta.ok) {
                    alert('Aluno cadastrado com sucesso')
                } else {
                    alert('Não foi possivel cadastrar')
                }
            })
    }

    atualizaNome = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    atualizaEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    submit() {
        const aluno = {
            name: this.state.name,
            email: this.state.email,
        }

        this.cadastrarAluno();
    }

    render() {
        return (
            <div className='container'>
                <h1>Cadastrar Aluno</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control required type="text" placeholder="Nome Completo" value={this.state.name} onChange={this.atualizaNome} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="E-mail" value={this.state.email} onChange={this.atualizaEmail} />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit" onClick={this.submit}>
                        Cadastrar
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Alunos