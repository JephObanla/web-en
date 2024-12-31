import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BiBitcoin } from "react-icons/bi";
import { BiAtom } from "react-icons/bi";
import { BiLogoMediumOld } from "react-icons/bi";
import myImage from './assets/sec-crest.webp';
import secImage from './assets/bitcoin.webp';
import thirdImage from './assets/futuristic.webp';
import lastImage from './assets/last.png';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="#home" className="title" id='home'><img src={myImage} alt="web3 crest" id='img' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto ul">
              <Nav.Link href="#home" className="li-tag">Home</Nav.Link>
              <Nav.Link href="#markets" className="li-tag">NFT Markets</Nav.Link>
              <Nav.Link href="#shop" className="li-tag">Shop</Nav.Link>
              <Nav.Link href="#about" className="li-tag">About Us</Nav.Link>

            </Nav>

            <div className='explore-btn'>
              <p style={{ color: '#fff', cursor: 'pointer',textDecoration:'none'}}>Explore Now</p>
            </div>

          </Navbar.Collapse>

        </Container>

      </Navbar>
      <div className="icon" data-tooltip='Explore Now!'>
        <BsArrowUpRight style={{ marginTop: '4px', marginLeft: '2px', width: '28px', height: '20px' }} />
      </div>
      <div className='arrow--'></div>

      <Container className="px-3 py-5 py-md-3" id="home">
        <Row className="first-row align-items-center">
          {/* Left Column */}
          <Col xs={12} md={6} className="first-col text-md-start text-center">
            <h1 className="title">
              Explore The Largest <br />
              <span className="gradient-text">NFT </span>Marketplaces
            </h1>
            <p className="description">
              Buy, Sell, and Trade Cryptocurrency Easily and Securely.
            </p>
            <div className="button-group d-flex justify-content-md-start justify-content-center gap-3">
              <div className="first-butt--" style={{ cursor: 'pointer' }}>Connect Wallet</div>
              <div className="sec-butt--" style={{ cursor: 'pointer' }}>Learn More</div>
            </div>
          </Col>

          {/* Right Column */}
          <Col xs={12} md={6} className="sec-col text-center">
            <div className="image-container">
              <img src={myImage} id="img-2" alt="NFT Example" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="px-3 py-5 py-md-3" id="home">
        <h1 style={{ color: 'white', textAlign: 'center' }}>Secure & Private</h1>
        <p style={{ color: 'white', textAlign: 'center', fontFamily: 'cursive' }}>24/7 Dedicated Support Team</p>
        <Row className="first-row align-items-center" style={{ marginTop: '30px' }}>
          {/* Left Column */}
          <Col xs={12} md={4} className="first-col">

            <div className="first-glow--">
              <div className="crypto-logo"> <BiBitcoin style={{ color: 'white' }} className='bit' /></div>
              <h3 style={{ textAlign: 'center', color: 'white' }}>Invest in Crypto</h3>
              <p style={{ textAlign: 'center', color: 'white' }}>Invest in crypto,anytime,anywhere with our safe,secure,and easy to use online platform</p>
              <h6 style={{ color: 'aqua', fontFamily: 'sans-serif', textAlign: 'center' }}>Get Started <BsArrowRight style={{ marginLeft: '2px', width: '15px', height: '15px', marginTop: '-2px' }} /></h6>
            </div>
          </Col>

          {/* Center column */}
          <Col xs={12} md={4} className="sec-col">
            <div className="sec-glow--">
              <div className="cryp-logo--"> <BiAtom style={{ color: 'white' }} className='bit-1' /></div>
              <h3 style={{ textAlign: 'center', color: 'white' }}>Fast Transaction</h3>
              <p style={{ textAlign: 'center', color: 'white' }}>Invest in cryptocurrency with our secure and easy-to-use platform.With 24/7 full access to customer support,you can trade with confidence</p>
              <h6 style={{ color: 'aqua', fontFamily: 'sans-serif', textAlign: 'center' }}>Get Started <BsArrowRight style={{ marginLeft: '2px', width: '15px', height: '15px', marginTop: '-2px' }} /></h6>
            </div>
          </Col>

          {/* Right column */}
          <Col xs={12} md={4} className="third-col">
            <div className="third-glow--">
              <div className="crypto-logo-2"> <BiLogoMediumOld style={{ color: 'white' }} className='bit-2' /></div>
              <h3 style={{ textAlign: 'center', color: 'white' }}>Secure</h3>
              <p style={{ textAlign: 'center', color: 'white' }}>Gain access to avariety of digital assets with just a few clicks.Our intuitive platform makes it easy to buy,sell,and store your cryptocurrency.</p>
              <h6 style={{ color: 'aqua', fontFamily: 'sans-serif', textAlign: 'center' }}>Get Started <BsArrowRight style={{ marginLeft: '2px', width: '15px', height: '15px', marginTop: '-2px' }} /></h6>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="first-row align-items-center" style={{ marginTop: '70px' }}>
          <Col xs={12} md={6}>
            <div className='col-close' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <h2 className="title--">Trade with confidence with <br />
                <span className="gradient-text--">our platform </span>which is straight-forward and easy to use.
              </h2>
              <p className="description--">
                Stay up to date with the latest news and trends<br /> in the crypto space.Follow our market insights to make informed decisions
              </p>

              <div className='explore-bt'>
                <p style={{ color: '#fff', cursor: 'pointer' }}>Explore Now</p>
              </div>
              <div className="button-group d-flex justify-content-md-start justify-content-center gap-3">
              
             </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="image-container">
              <img src={thirdImage} id="img-2--" alt="NFT Example" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="first-row align-items-center" style={{ marginTop: '70px' }}>
          <Col xs={12} md={6}>
            <div className="image-container">
              <img src={lastImage} id="img-3--" alt="NFT Example" className="img-fluid" />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className='col-close--'>
              <h2 className="title--2" style={{ marginBottom: '-70px' }}>
                <span className="gradient-text--2">24/7 </span>access to customer support.
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App

















































// This is the main App component for our React application.

// function App() {(
//     <>
{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
//     </>
//   )
// }

// function App () {(
//   <Container className="p-3">
//     <Jumbotron>
//       <h1 className="header">Welcome To React-Bootstrap</h1>
//       <ExampleToast>
//         We now have Toasts
//         <span role="img" aria-label="tada">
//           🎉
//         </span>
//       </ExampleToast>
//     </Jumbotron>
//   </Container>
// )};
