import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import Head from 'next/head';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return <div>
                <Head>
                    <title>LinsTur - Controle TVDE</title>
                    <meta name='description' content='Controle de corridas TVDE e Tranfer' />
                    <meta name='author' content='LinsTur' />
                </Head>
                <Menu />

            <Container className="text-center">
                <Row className="valorDia">
                    <style>{`.valorDia{
                                width: 250px;
                                margin: 10px auto;
                                border-radius: 15px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                                background-color: #000;
                                color: #fff;
                                font-size: 24pt;
                            }`}</style>
                <Col sm="12" md={{ size: 6, offset: 3 }}>€ 999</Col>
                </Row>
            </Container>

            </div>
  }
  
  export default HomePage