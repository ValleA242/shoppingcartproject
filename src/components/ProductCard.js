//BS imports 
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function productCard(props) {
    const product = props.product;

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {product.title}
                </Card.Title>
            </Card.Body>
        </Card>
    )

}