import React from 'react'
import ReactLoading from 'react-loading';
import loading from './loading.css'

export const Loading = ({ type, color }) => {
    
  return (
    <>
    <div className='loading'>
    <ReactLoading type={'bubbles'} color={'blue'} height={300} width={375} />
    <p>loading free onrender stuff...</p>
    </div>
    </>
  )
}
