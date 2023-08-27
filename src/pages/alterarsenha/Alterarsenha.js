import React, {useState} from "react";
import {FormGroup, Label, Form, Input, Card, Button } from 'reactstrap';
import {Link, Navigate} from 'react-router-dom';

import firebase from "../firebase/firebase"
import 'firebase/auth';

function Alterarsenha(){

  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('');

function recuperarSenha(){

  firebase.auth().sendPasswordResetEmail(email).then(resultado => {
    setMensagem("");
    alert("Email enviado com sucesso");
  }).catch(erro => {
    setMensagem("Erro ao enviar email: " + erro.message);
  })
};

  return (
    <div>

        <div className="d-flex justify-content-center">
        <Card style={{width: '18rem'}}>

          {/* NOME */}
          <Form className="ms-2 me-2">

          <h3>REDEFINIR SENHA</h3>

          {/*EMAIL*/}
          <FormGroup className="text-start">
          <Label for="email">
            Email:
          </Label>
            <Input
              type="email"
              name="email"
              style={{textTransform:"uppercase"}}
              required
              placeholder="Email do usuário"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          {/*SOLICITAR ALTERAÇÃO DE SENHA*/}
          {/* <p>
          {!loading && <Button
            color="primary"
            outline
          type="button" onClick={handleSubmit} className="btn">Redefinir Senha</Button>}
          {loading && (<Button className="btn" disabled>Aguarde...</Button>)}
          </p> */}
          <div>
          <button onClick={recuperarSenha} className="w-100 btn btn-lg btn-primary mt-3" type="button">Enviar</button>
            {/* <input inChange = {(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
            <label for="flatingInpu">E-mail</label> */}
          </div>

            <button  type="button">Enviar</button>

          </Form>
          </Card>
        </div>
    </div>
  )
 }

export default Alterarsenha