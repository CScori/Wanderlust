import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import {
    Card,
    CardTitle
} from "reactstrap";
import styled from "styled-components"
import Experience from './Experience';

const Butn = styled.button`
  padding: 5px 40px;
  margin: 30px auto;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

const UserSaved = (props) => {

    return (
        <div>

            <Card id={props.id}>
                <h3>Saved Trips!</h3>
                <CardTitle>{props.name}</CardTitle>
                <Link to="/general-landing-page">
                    <Butn>Save More Trips!</Butn>
                </Link>
            </Card>
                
                   
        </div>

    )
}

export default UserSaved
