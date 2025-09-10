import { Row, Col } from "react-bootstrap";
import { productArray } from "../ProductsStore";

function Store() {
    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store</h1>
            <Row xs={1} md={3} className="g-4">
                {productArray.map((product, idx) => (
                    <Col align="center">
                        <h1>{product.title}</h1>
                        <h2>{product.price}</h2>
                    </Col>
                ))}

            </Row>
        </>
    )
}

export default Store;