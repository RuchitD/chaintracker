const coinbaseURI = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&e=Coinbase';
const bitfinexURI = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&e=Bitfinex';

export default async function handler(req, res) {
  const [coinbase, bitfinex] = await Promise.all([
    fetch(coinbaseURI).then(response => response.json()),
    fetch(bitfinexURI).then(response => response.json())
  ])

  res.json({
    coinbase, bitfinex
  })
}