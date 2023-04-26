import axios from "axios"

export const ServiceFunctions = {

    getBitcoinEuroOrderBook: async function(){
        const res = await fetch(`http://localhost:5000/binance/btceur/orderbook`);
        const data = await res.json()
        return JSON.parse(data)
    },
    getBitcoinUsdOrderBook: async function(){
        const res = await fetch(`http://localhost:5000/binance/btcusd/orderbook`);
        const data = await res.json()
        return JSON.parse(data)
    },
    getEtheriumEuroOrderBook: async function(){
        const res = await fetch(`http://localhost:5000/binance/etheur/orderbook`);
        const data = await res.json()
        return JSON.parse(data)
    },
    getEtheriumUsdOrderBook: async function(){
        const res = await fetch(`http://localhost:5000/binance/ethusdt/orderbook`);
        const data = await res.json()
        return JSON.parse(data)
    },
}