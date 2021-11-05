import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { Col, Row, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from "react-bootstrap";


const TEN_SECONDS = 10;

export default function App() {
  const [data, setData] = useState({ coinbase: null, bitfinex: null });
  const [nextRefreshCounter, setNextRefreshCounter] = useState(null)

  useEffect(() => {
    if(nextRefreshCounter) {
      return
    } 
   

    fetch('/api/coin')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setNextRefreshCounter(TEN_SECONDS)
      })
      .catch(console.error)
  }, [nextRefreshCounter])

  useEffect(() => {
    if(nextRefreshCounter) {
      const timeout = setTimeout(() => {
        setNextRefreshCounter(prev => {
          return prev > 1 ? prev - 1 : null
        })
      }, 1000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [nextRefreshCounter])

  const { coinbase, bitfinex } = data;
  console.log({ nextRefreshCounter })

  if(!coinbase && !bitfinex) {
    return <p> <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></p>
  }

   
  return (
      
     
      
    
  //<div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'yellow', padding: 8, display: 'flex', justifyContent: 'center' }}>
        <p>Bitcoin is ${coinbase.BTC.USD} on Coinbase</p>
      </div>
      <div style={{ backgroundColor: 'yellow', padding: 8, display: 'flex', justifyContent: 'center' }}>
        <p>Ethereum is ${coinbase.ETH.USD} on Coinbase</p>
      </div>
      <h1>Sell Bitcoin on {coinbase.BTC.USD > bitfinex.BTC.USD ? 'Coinbase' : 'Bitfinex'}</h1>
      <div style={{ backgroundColor: 'grey', padding: 8, display: 'flex', justifyContent: 'center' }}>
        <p>Bitcoin is ${bitfinex.BTC.USD} on Bitfinex</p>
      </div>
      <div style={{ backgroundColor: 'grey', padding: 8, display: 'flex', justifyContent: 'center' }}>
        <p>Ethereum is ${bitfinex.ETH.USD} on Bitfinex</p>
      </div>
      <h1>Buy Ethereum on {coinbase.ETH.USD < bitfinex.ETH.USD ? 'Coinbase' : 'Bitfinex'}</h1>
      <p class="text-center">Refreshes in {nextRefreshCounter}</p> 
    </div>
  
 /*  <Container fluid>
  <Row bg="dark">
    <Col class="d-inline-flex justify-content-center"><div class="p-3 mb-2 bg-primary text-white text-center " ><p> Bitcoin is ${coinbase.BTC.USD} on Coinbase</p></div></Col>
  </Row>
  <Col class="d-inline-flex  justify-content-center"><div class="p-3 mb-2 bg-primary text-white text-center"><p> Ethereum is ${coinbase.ETH.USD} on Coinbase</p></div></Col>
  <p class="text-center"><h1>Sell Bitcoin on {coinbase.BTC.USD > bitfinex.BTC.USD ? 'Coinbase' : 'Bitfinex'}</h1></p>
  <Row>
    <Col><div class="p-3 mb-2 bg-primary text-white text-center"><p>Bitcoin is ${bitfinex.BTC.USD} on Bitfinex</p></div></Col>
  </Row>
  <Col><div class="p-3 mb-2 bg-primary text-white text-center"><p>Ethereum is ${bitfinex.ETH.USD} on Bitfinex</p></div></Col>
  <p class="text-center"><h1>Buy Ethereum on {coinbase.ETH.USD < bitfinex.ETH.USD ? 'Coinbase' : 'Bitfinex'}</h1></p>
 </Container> */
  
 
  /*</div>*/
  
  
  )
}


