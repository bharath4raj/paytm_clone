// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { client } from "../axiosConfig";
import { Link } from "react-router-dom";


const DashBoardPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        client.get("/products")
            .then((response) => {
                console.log('Response :', response.data.products)
                setData(response.data.products)
            }).catch((err) => {
                console.log(err)
            })

    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">
                        DashBoardPage after Successfull Login
                    </h1>
                </Col>
            </Row>
            <Row>
                <ul className="products d-flex">
                    {
                        data && data.length > 0 && data.map((item) => {
                            return <li>
                                <h2>{item.title}</h2>
                                <img src={item.thumbnail} />

                                <span>Prices: Rs{item.price}</span>
                                <p>{item.description}</p>
                                <Link to={`/details/${item.id}`}>More Details</Link>
                                <div className="btn_wrap">
                                    <button className="cart">
                                        ADD TO CART
                                    </button>
                                    <button className="buy">
                                        ADD TO CART
                                    </button>
                                </div>


                            </li>
                        })
                    }
                </ul>
            </Row>
        </Container>
    )
}

export default DashBoardPage