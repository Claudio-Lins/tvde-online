
import Head from 'next/head';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

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

                <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Container>
        </Jumbotron>
        

    </div>
  }
  
  export default Login