import React, { useEffect, useState } from 'react'
import { ServiceFunctions } from '../service/application.service'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const EtheriumPage = () => {

    const [data, setData] = useState()
    const [currency, setCurrency] = useState('USD')
    useEffect(() => {
        if(currency == 'USD'){
            ServiceFunctions.getEtheriumUsdOrderBook().then(data => setData(data))
        } else if(currency == 'EUR'){
            ServiceFunctions.getEtheriumEuroOrderBook().then(data => setData(data))
        }
    }, [currency])

    // console.log(data);

    const optionsDataAsks = data ? data.result?.asks?.map(el => el.at(0)) : []
    const optionsDataBids = data ? data.result?.bids?.map(el => el.at(0)) : []

    const options = {title: {text: 'Etherium'}, series: [{data: optionsDataAsks,}, {data: optionsDataBids}]}

    return (
        <div className='container'>
            <div className="mt-4">
                <button className={currency === 'USD' ? 'cur active' : 'cur'} type='button'
                    onClick={() => setCurrency('USD')}
                >
                    USD
                </button>
                <button className={currency === 'EUR' ? 'cur active' : 'cur'} type='button'
                    onClick={() => setCurrency('EUR')}
                >
                    EUR
                </button>
            </div>

            <div className="mt-4">
                {
                    data ? 
                    
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                    
                    : null
                }
            </div>
        </div>
    )
}

export default EtheriumPage