import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useStoreContext } from '@/hooks/useStoreContext'
import { Link } from 'react-router-dom'
import './Cards.css'

const Cards = () => {
  const { list, productImage, listFiltred } = useStoreContext()
  console.log(listFiltred.length)
  return (
    <>

      {listFiltred.length === 0
        ? list.map((item) => {
          return (
            <div key={item.id}>

              <Card className='card'>
                <Card.Img className='cardImage' variant='top' src={item.image || item.images || productImage} />

                <Card.Body>
                  <Card.Title className='cardBody'> {item.product_name} </Card.Title>
                  <Card.Text className='cardBody'>
                    {item.description}
                  </Card.Text>

                </Card.Body>
                <Card.Text className='cardElement'> Price: ${item.price} </Card.Text>
                <Link to={`/detalle/${item.product_name} `} state={item}>
                  <Button className='btn' variant='primary'>More info</Button>
                </Link>

              </Card>
            </div>

          )
        })

        : listFiltred.map((item) => {
          return (
            <div key={item.id}>

              <Card className='card'>
                <Card.Img className='cardImage' variant='top' src={item.image || item.images || productImage} />

                <Card.Body>
                  <Card.Title className='cardBody'> {item.product_name} </Card.Title>
                  <Card.Text className='cardBody'>
                    {item.description}
                  </Card.Text>

                </Card.Body>
                <Card.Text className='cardElement'> Price: ${item.price} </Card.Text>
                <Link to={`/detalle/${item.product_name} `} state={item}>
                  <Button className='btn' variant='primary'>More info</Button>
                </Link>

              </Card>
            </div>

          )
        })}
    </>

  )
}

export default Cards
