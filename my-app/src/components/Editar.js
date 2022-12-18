import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export const Editar = (props) => {

    const { id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [active, setActive] = useState('');

    // let history = useNavigate();

    useEffect(() => {
        const getAluno = async () => {
            await fetch("http://localhost:8000/api/dados_aluno/" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    // console.log(responseJson);
                    setName(responseJson.aluno?.name);
                    setEmail(responseJson.aluno?.email);
                    setCourse(responseJson.aluno?.course);
                    setActive(responseJson.aluno?.active);
                })
        }

        getAluno();
    }, [id]);

    // const editarAluno = async e => {
    //     e.preventDefault();

    //     await fetch("http://localhost:8000/api/editar_aluno/" + id, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ id, name, email, course, active })
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log(responseJson);
    //             history.push("/");
    //         })
    // }

    return (
        <div className='container'>
            <h1>Editar Aluno</h1>
            <Form >
                <Form.Group className="mb-3">
                    <Form.Control name="name" id="name" type="text" value={name} onChange={e => setName(e.target.name)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="email" id="email" type="email"  value={email} onChange={e => setEmail(e.target.email)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="course" id="course" type="text" value={course} onChange={e => setCourse(e.target.course)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="text" name="active" id="active" value={active} onChange={e => setActive(e.target.active)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Editar
                </Button>
            </Form>
        </div>
    );
}