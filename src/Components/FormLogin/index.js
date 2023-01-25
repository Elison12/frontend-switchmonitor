import React, { useState } from 'react';
import { Form, Button, Input, Image } from './style';
import { useHistory } from "react-router-dom";
import http from '../../Services/APIhttp';
import { getId, idUser, login, logout } from '../../Services/auth';
import Logo from '../../Assets//img/logoSTIreduzido_branco.png';
import Swal from "sweetalert2";

const FormLogin = () => {
    const [username, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();



    const loginUser = () => {
        const body = {
            email: username,
            password: password
        }
        console.log(body)
        if (body.email !== "" && body.password !== "") {
            http
                .post('/login', body)
                .then((res) => {
                    logout()
                    console.log(res)
                    console.log('go')
                    login(res.data.token);
                    idUser(res.data._id);
                    console.log(res.data._id);
                    console.log(getId())
                    history.push('/home');
                    window.location.reload(true)
                })
                .catch((err) => {
                    console.log(err.response)

                })
        } else {
            Swal.fire({
                title: "Preencha todos os dados",
                // text: "Alert successful",
                icon: "error",
                confirmButtonText: "OK",
            })
        }
    }
    return (
        <div>
            <Form>
                <Image src={Logo}></Image>
                <Input>
                    <input
                        onChange={e => setLogin(e.target.value)}
                        placeholder="Email"
                        type="email"
                        required
                        value={username}
                    />
                </Input>
                <Input>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                        type="password"
                        required
                        value={password}
                    />
                </Input>
                <Button onClick={loginUser}><h1>Entrar</h1></Button>
            </Form>
        </div>
    );
}

export default FormLogin;