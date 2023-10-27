import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useStoreContext } from '@/hooks/useStoreContext'
import { Link } from 'react-router-dom';
import './Cards.css'


const Cards = () => {
    const { list, listFiltered } = useStoreContext()
    const placeHolderImage = "https://sellmyuniform.co.uk/wp-content/uploads/2023/03/looking_for.jpg"

    return (
        <>
            {
                list.map((item) => {
                    return (
                        <div key={item.id}>

                            <Card style={{ width: '18rem', height: '36rem' }}>
                                    <Card.Img variant="top" src={item.image || item.images || placeHolderImage} style={ {height: '15rem'} } />
                                
                                    <Card.Body className='cardBody'>
                                        <Card.Title className='cardTitle'> {item.product_name} </Card.Title>
                                        <Card.Text className='cardText'>
                                            {item.description}
                                        </Card.Text>
                                        <div className='cardDetail'>
                                        <Card.Text> Price: ${item.price} </Card.Text>
                                        <Link to={`/detalle/${item.product_name} `} state={item}>
                                            <Button variant="primary">More info</Button>
                                        </Link>
                                        </div>

                                    </Card.Body>
                                
                            </Card>
                        </div>

                    )
                })
            }
        </>
        // <Card style={{ width: '15rem', height: '35rem' }}>

        //     <Card.Img className='imageCard' variant="top" src={props.item.image? props.item.image : props.item.images} />
        //     <Card.Body>
        //         <Card.Title> {props.item.product_name} </Card.Title>
        //         <Card.Text>
        //             {props.item.description}
        //         </Card.Text>
        //         <Card.Text> ${ props.item.price} </Card.Text>

        //         <Button variant="primary">More info</Button>
        //     </Card.Body>
        // </Card>

    )
}

export default Cards