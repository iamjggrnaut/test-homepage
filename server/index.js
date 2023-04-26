const express = require('express')
const cors = require('cors')
const request = require('request')
const PORT = 5000

const app = express()

app.use(cors())
app.use(express.json())

app.get('/binance/btceur/orderbook', function(req,res){
    request('https://api.cryptowat.ch/markets/binance/btceur/orderbook', function (error, response, body) {
        if (!error) {
            return res.json(body)
        }
    })
})

app.get('/binance/btcusd/orderbook', function(req,res){
    request('https://api.cryptowat.ch/markets/binance/btceur/orderbook', function (error, response, body) {
        if (!error) {
            return res.json(body)
        }
    })
})

app.get('/binance/ethusdt/orderbook', function(req,res){
    request('https://api.cryptowat.ch/markets/binance/ethusdt/orderbook', function (error, response, body) {
        if (!error) {
            return res.json(body)
        }
    })
})

app.get('/binance/etheur/orderbook', function(req,res){
    request('https://api.cryptowat.ch/markets/binance/etheur/orderbook', function (error, response, body) {
        if (!error) {
            return res.json(body)
        }
    })
})

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

    }catch(e){console.log(e);}
}

start()