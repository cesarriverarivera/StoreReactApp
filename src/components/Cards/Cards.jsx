import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'

const Cards = (props) => {


    return (
        <>
            <Card style={{ width: '15rem', height: '35rem' }}>
                
                <Card.Img className='imageCard' variant="top" src={props.item.image? props.item.image : props.item.images} />
                <Card.Body>
                    <Card.Title> {props.item.product_name} </Card.Title>
                    <Card.Text>
                        {props.item.description}
                    </Card.Text>
                    <Card.Text> ${ props.item.price} </Card.Text>

                    <Button variant="primary">More info</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cards