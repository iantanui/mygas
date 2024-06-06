import React from 'react';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import { Pencil, Trash} from 'react-bootstrap-icons'

const ProductItem = ({ product, onEdit, onDelete}) => {
    return (
        <ListGroup.Item>
            <Row>
                <Col>
                    <div>{product.name}</div>
                    <div>Quantity: {product.quantity}</div>
                    <div>Price: {product.price}</div>
                </Col>

                <Col xs="auto">
                    <Button variant='outline-primary' onClick={() => onEdit(product)}>
                        <Pencil />
                    </Button>
                    <Button variant='outline-primary' onClick={() => onDelete(product.id)} style={{ marginLeft: '8px' }}>
                        <Trash />
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default ProductItem;