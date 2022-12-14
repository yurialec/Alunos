import React, { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Alunos = () => {

    const [aluno, setAluno] = useState({
        name: "",
        email: "",
        active: "1",
        course: "",
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    const valorInput = e => setAluno({
        ...aluno, [e.target.name]: e.target.value
    });

    let navigate = useNavigate();

    const cadastrarAluno = async (e) => {
        // console.log("aluno", aluno);
        e.preventDefault();

        await fetch("http://localhost:8000/api/cadastrar_aluno", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "active": aluno.active,
                "course": aluno.course,
                "email": aluno.email,
                "name": aluno.name
            })
        })
            .then(resposta => {
                // console.log("resposta", resposta)
                if (resposta.ok) {
                    navigate('/');
                } else {
                    alert("Erro ao cadastrar aluno");
                }
            })
    }


    return (
        <div className='container'>
            <h1>Cadastrar Aluno</h1>
            <Form onSubmit={cadastrarAluno}>
                <Form.Group className="mb-3">
                    <Form.Control name="name" id="name" type="text" placeholder="Nome Completo" onChange={valorInput} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="email" id="email" type="email" placeholder="E-mail" onChange={valorInput} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="course" id="course" type="text" placeholder="Curso" onChange={valorInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="text" hidden value={"1"} onChange={valorInput} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    )
}