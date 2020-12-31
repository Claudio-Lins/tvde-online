import React from 'react';
import {
    Container,
    Jumbotron,
    Button,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import Head from 'next/head';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
   
    return (
        <div>
                <Head>
                    <title>LinsTur - Controle TVDE</title>
                    <meta name='description' content='Controle de corridas TVDE e Tranfer' />
                    <meta name='author' content='LinsTur' />
                </Head>
                <Menu />
            <Jumbotron fluid className="totalDia">
            <style>{`.totalDia{
                        margin: 20px auto;
                        padding-bottom: 30px;
                        background-color: #000;
                        color: #fff;
                        font-size: 24pt;
            }`}</style>
                <Container className="text-center">
                    <h1 className='display-2'>€ 999</h1>
                    <p className='lead'>Total dia</p>
                </Container>    
            </Jumbotron>

            <Container fluid className="text-center">
                <Row>
                  <Col>
                    01
                  </Col>
                  <Col>.col</Col>
                  <Col>.col</Col>
                  <Col>.col</Col>
                </Row>
            </Container>

        </div>
    )
  }

  export default HomePage;
