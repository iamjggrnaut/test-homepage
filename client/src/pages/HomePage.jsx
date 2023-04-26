import React, { useEffect, useState } from 'react'
import { ServiceFunctions } from '../service/application.service'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const [currency, setCurrency] = useState()
    useEffect(() => {
        ServiceFunctions.getBitcoinEuroOrderBook().then(data => setCurrency(data))
    }, [])

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div className="mt-5 p-3 row d-flex">
                <div className="col">
                    <h1 className='mb-5' style={{maxWidth: '480px', fontSize: '48px'}}>
                        Best Crypto Exchanges for Traders
                    </h1>
                    <br />
                    <p style={{maxWidth: '400px', fontSize: '20px'}}>
                        We make buying and selling cryptocurrency fast, easy and secure
                    </p>
                </div>
                <div className="col">
                    <div className="">
                        <img src="https://i.pinimg.com/originals/ea/16/21/ea1621811e3243277653ef7efccaddea.png" alt="" 
                            style={{maxWidth:'420px', borderRadius: '8px'}}
                        />
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="plate d-flex flex-column align-items-center justify-content-center"
                        onClick={() => navigate('etherium')}
                    >
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png" 
                            alt="" 
                            style={{heigh: '100px', width: '100px'}}
                        />
                        <h5 className='text-center mt-4' >Etherium</h5>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="plate d-flex flex-column align-items-center justify-content-center"
                        onClick={() => navigate('bitcoin')}
                    >
                        <img src="https://freepngimg.com/thumb/bitcoin/59728-gold-exchange-blockchain-bitcoin-cryptocurrency-lakshmi-coin.png" 
                            alt="" 
                            style={{heigh: '100px', width: '100px'}}
                        />
                        <h5 className='text-center mt-4'>Bitcoin</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage