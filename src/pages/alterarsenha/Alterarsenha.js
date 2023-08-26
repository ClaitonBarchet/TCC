import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { FormGroup, Label, Form, Input, Card, Button  } from 'reactstrap';

const Alterarsenha = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {error,setError, loading } = useAuthentication();
    
    // MÉTODO
      const handleSubmit = async (e) => {
       e.preventDefault()
       setError(null)

        // const user = {
        //     email,
        //     password,
        // }

        if (error == null){
        setEmail("")
        }

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
          <p>
          {!loading && <Button
            color="primary"
            outline
          type="button" onClick={handleSubmit} className="btn">Redefinir Senha</Button>}
          {loading && (<Button className="btn" disabled>Aguarde...</Button>)}
          </p>

          </Form>
          </Card>
        </div>
    </div>
  )
}

export default Alterarsenha