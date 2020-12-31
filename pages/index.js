import Head from 'next/head';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container} from 'reactstrap';

function HomePage() {
    return <div>
                <Head>
                    <title>LinsTur - Controle TVDE</title>
                    <meta name='description' content='Controle de corridas TVDE e Tranfer' />
                    <meta name='author' content='LinsTur' />
                </Head>
                <Menu />
                <Jumbotron fluid className="servicos">
<style>{`.servicos{
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: #00f;
    color: #fff;
    margin-bottom: 0rem !important;
    margin-top: 0rem !important;
}`}</style>
                    <Container className="text-center">
                        <h1 className="display-4">Serviços da Empresa</h1>
                        <p>Temos a solução que a sua empresa precisa</p>
                    </Container>
                </Jumbotron>

            </div>
  }
  
  export default HomePage