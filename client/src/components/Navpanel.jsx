import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navpanel = () => {

    const navigate = useNavigate()

    const location = document.location.href.split('/').at(-1)
    
    return (
        <div className='navpanel'>
            <div className="container d-flex  align-items-center">
                <div className="col d-flex align-items-center"
                    style={{cursor: 'pointer'}}
                    onClick={() => navigate('/test-homepage')}
                >
                    <img 
                        style={{width: '48px', height:'48px'}}
                        src="https://freepngimg.com/thumb/bitcoin/59728-gold-exchange-blockchain-bitcoin-cryptocurrency-lakshmi-coin.png" 
                        alt="" 
                    />
                    <h5 className='ms-2'>LOGO HERE</h5>
                </div>

                <div className="col text-end">
                    <span style={location === 'etherium' ? {color: 'cyan', cursor: 'pointer'} : {cursor: 'pointer'}}  className='me-3'
                        onClick={() => navigate('/test-homepage/etherium')}
                    >
                        Etherium
                    </span>
                    <span style={location === 'bitcoin' ? {color: 'cyan', cursor: 'pointer'} : {cursor: 'pointer'}} 
                        onClick={() => navigate('/test-homepage/bitcoin')}
                    >
                        Bitcoin
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navpanel