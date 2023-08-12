import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import {FormGroup, Label, Form, Input, Card, Button  } from 'reactstrap';

const Cadastrar = () => {
    const [displayName, setDisplayName] = useState ("")
    const [sobrename, setSobrename] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { createUser, error,setError, loading } = useAuthentication();
    
    // MÉTODO
      const handleSubmit = async (e) => {
       e.preventDefault()
       setError(null)
        // const = constante; let = variável (var)

        const user = {
            displayName,
            sobrename,
            email,
            password,
            emailconcatenado: displayName+"."+sobrename+"@email.com.br"
        }

        //VERIFICA SE AS SENHAS SÃO IGUAIS
         if(password !== confirmPassword){
           setError("As senhas precisam ser iguais!")
         return;
         }else{
          setError ("")       
         }

        //VERIFICA PREENCHIMENTO DE SENHA
        if(password == ("")){
          setError("Informe uma senha!")
        return;     
        }

        if (error == null){
        setDisplayName("")
        setSobrename("")
        setPassword("")
        setConfirmPassword("")
        }

        const res = await createUser (user)

    };

  return (
    <div>

        <div className="d-flex justify-content-center">
        <Card style={{width: '18rem'}}>

             {/*NOME*/}
          <Form className="ms-2 me-2">
          <FormGroup className="text-start mt-2" >
          <h3>CADASTRO</h3>
          <Label  for="exampleText"> 
            Nome:
            </Label>
            <Input
              
              type="name"
              name="displayName"
              style={{textTransform:"uppercase"}}
              required
              placeholder="Nome do usuário"

              value={displayName}

              onChange={(e) => setDisplayName(e.target.value)}
            />
          </FormGroup>


          {/*SOBRENOME*/}
          <FormGroup className="text-start">
          <Label for="sobrename">
            Sobrenome:
          </Label>
            <Input
              type="sobrename"
              name="sobrename"
              style={{textTransform:"uppercase"}}
              required
              placeholder="Sobrenome do usuário"

              value={sobrename}
              onChange={(e) => setSobrename(e.target.value)}
            />
          </FormGroup>

          {/*SENHA*/}
          <FormGroup className="text-start">
          <Label for="senha">
            Senha:
          </Label>
            <Input
              type="password"
              name="password"
              required
              placeholder="Insira sua senha"

              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

            {/*CONFIRMAR SENHA*/}
            <FormGroup className="text-start">
            <Label for="senha">
            Confirmar Senha:
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirme a sua senha"

              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>

          {/*CADASTRAR*/}
          <p>
          {!loading && <Button
            color="primary"
            outline
          type="button" onClick={handleSubmit} className="btn">Cadastrar</Button>}
          {loading && (<Button className="btn" disabled>Aguarde...</Button>)}
          </p>

          {/*SENHAS DIFERENTES*/}
          {error && <p className="error">{error}</p>}

          </Form>
          </Card>
        </div>
    </div>
  )
}

export default Cadastrar