import React, {useEffect, useState} from 'react';
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import env from "../env";
import {ClockLoader} from "react-spinners";
import { css } from "@emotion/react";


const override = css`
  margin: 0 auto;
  border-color: #ff0000;
`;

const Store = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])
    useEffect(  () => {
        const fetcingData = async () => {
            const response = await axios.get(env.url).catch(err => console.log(err));
           setUsers(response.data);
        }
        fetcingData()
       setTimeout(() =>{
           setLoading(false);
       },1000)
    }, [])
    if(loading){
       return <div style={{display:'flex', justifyContent:'center', alignItems: 'center', height:'70vh'}}>
           <ClockLoader color="#2545f7" loading={loading} css={override} size={100} />
       </div>
    }
    else{
        return (
            <div>
                <Container>
                    <Row>
                        {users.map(user =>(
                            <Col  key={user.id}>
                                <Card style={{width: '30rem'}}>
                                    <Card.Body>
                                        <Card.Title>{user.email}</Card.Title>
                                        <Card.Text>
                                            {user.address.city}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }

};

export default Store;