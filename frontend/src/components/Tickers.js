import React from 'react'
import { useState } from 'react'
import Ticker from './Ticker'
import './Tickers.css'

const Tickers = ({tickers, selectTicker, selected}) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='tickers'>
        <input className='search' type="text" placeholder='Buscar...' onChange={(event) => {
          setSearchTerm(event.target.value)
        }}/>
        {Object.keys(tickers).filter((id) => {
          if (searchTerm === '') {
            return id
          } else if (tickers[id].toUpperCase().includes(searchTerm.toUpperCase())) {
            return id
          } return ''
        }).map((id, index) => (
          <Ticker key={id} id={id} name={tickers[id]} selectTicker={selectTicker} selected={selected} />
        ))}
    </div>
  )
}

export default Tickers