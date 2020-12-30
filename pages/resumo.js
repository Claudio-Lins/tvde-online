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

             <div class="row">
        <Container fluid className="text-center">
      <div class="col-lg-3">
        <svg class="bd-placeholder-img rounded-circle" width="50" height="50" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">50x50</text></svg>
        <h3>Uber</h3>
      </div>

      <div class="col-lg-3">
        <svg class="bd-placeholder-img rounded-circle" width="50" height="50" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">50x50</text></svg>
        <h3>Bolt</h3>
        </div>

      <div class="col-lg-3">
        <svg class="bd-placeholder-img rounded-circle" width="50" height="50" xmlns7="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">50x50</text></svg>
        <h3>FreeNow</h3>
      </div>

      <div class="col-lg-3">
        <svg class="bd-placeholder-img rounded-circle" width="50" height="50" xmlns7="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">50x50</text></svg>
        <h3>Cash</h3>
      </div>
      </Container>
      <hr class="featurette-divider"></hr>
    </div>     

        </div>
    )
  }

  export default HomePage;
