import React, { useState } from 'react';
import { Form, Button, Input } from './style';
import { useHistory } from "react-router-dom";
import http from '../../Services/APIhttp';
import { getId, idUser, login, logout } from '../../Services/auth';

const FormLogin = () => {
    const [username, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const linkCadastro = () => {
        history.push('/cadastro');
    }
    
    
    const loginUser = () => {
        const body = {
            email: username,
            password: password
        }
        console.log(body)
        if( body.email !== "" && body.password !== ""){
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
            })
            .catch((err) => {
                console.log(err.response)

            })
        } else {
            console.log('erro')
            // swal('Preencha todos os dados!');
        }
    }
    return(
        <div>
            {/* <Image src={logo}/> */}
            <Form>
                <h1 style={{marginBottom: '10px'}}>Login</h1>
                    <Input>
                        <h2>Email </h2>
                        <input 
                           onChange={e => setLogin(e.target.value)}
                           placeholder="Email"
                           type="email"
                           required
                           value={username}
                        />
                    </Input>
                    <Input>
                        <h2>Senha</h2>
                        <input 
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                        type="password"
                        required
                        value={password}
                        />
                    </Input>
                    <div 
                    style={{fontSize: '15px', marginBottom: '10px', cursor: 'pointer', fontWeight: 'bold'}} 
                    onClick={linkCadastro}>
                        Não tenho Cadastro
                    </div>
                    <Button onClick={loginUser}>Entrar</Button>
            </Form>
        </div>
    );
}

export default FormLogin;