import React from 'react';
import {
    Container, 
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
                                margin: 40px auto;
                                border-radius: 15px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                                background-color: #000;
                                color: #fff;
                                font-size: 24pt;
                            }`}</style>
                <Col sm="12" md={{ size: 6, offset: 3 }}>€ 999</Col>
                </Row>

                <Row>
                    <Col>
                    <div>
                        <Card>
                            <CardImg top width="10%" src="Bolt_logo.png" alt="Logo Bolt" />
                            <CardBody>
                            <CardText>€</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    </Col>
                    <Col>UBER</Col>
                    <Col>FreeNow</Col>
                    <Col>Ca$h</Col>
                </Row>

            </Container>
            <Button color="primary" size="lg" block>€ Entrada</Button>                    
            </div>

  }

  export default HomePage;
