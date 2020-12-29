
import Head from 'next/head';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Image from 'next/image';

import {Jumbotron, Container} from 'reactstrap';


function Login() {
    return <div>
        
        <Head>
                    <title>LinsTur - Controle TVDE</title>
                    <meta name='description' content='Controle de corridas TVDE e Tranfer' />
                    <meta name='author' content='LinsTur' />
                </Head>
        
        <Menu />
        
        <Jumbotron fluid>
            <Container className="text-center">
                <form>

                <Image src="/imgs/lg_linsTur.png" alt="LinsTur" width={100} height={50} />
                
                <h1 class="h3 mb-3 fw-normal">Faça Login</h1>
                <div class="mb-3">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                </div>
                <div class="mb-3">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                </div>
                
                <div class="mb-3">
                    <Input type="checkbox" name="check" id="exampleCheck"/>
                    <Label for="exampleCheck" check>Lembrar</Label>
                </div>
                
                <button type="submit" class="btn btn-primary">Login</button>
                
                </form>
            </Container>
        </Jumbotron>
        

    </div>
  }
  
  export default Login