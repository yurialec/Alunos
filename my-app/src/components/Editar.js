import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export const Editar = (props) => {

    const { id } = useParams(props);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [active, setActive] = useState('');

    let history = useNavigate();

    useEffect(() => {
        const getAluno = async () => {
            await fetch("http://localhost:8000/api/dados_aluno/" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    // console.log(responseJson);
                    setName(responseJson.name);
                    setEmail(responseJson.email);
                    setCourse(responseJson.course);
                    setActive(responseJson.active);
                })
        }
        getAluno();
    }, [id]);

    const editarAluno = async e => {
        e.preventDefault();

        await fetch("http://localhost:8000/api/editar_aluno/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, name, email, course, active })
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                history.push("/");
            })
    }

    return (
        <div className='container'>
            <h1>Editar Aluno</h1>
            <Form onSubmit={editarAluno}>
                <Form.Group className="mb-3">
                    <Form.Control name="name" id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="email" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="course" id="course" type="text" value={course} onChange={e => setCourse(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="text" name="active" id="active" onChange={e => setActive(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Editar
                </Button>
            </Form>
        </div>
    );
}