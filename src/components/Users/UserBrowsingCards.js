//this page will not be displayed but will take in data from the User Browsing page and return it as cards
import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { Link } from "react-router-dom";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";
import styled from "styled-components";
/* good going on the reactstrap cards, Cori. They look really nice :) */

const UserBrowsingCards = (props) => {
    // console.log (props)
    const [place, setPlace] = useState({
        place: ""
    })

    const [oranizer, setOrganizer] = useState({
        oranizer: ""
    })

    useEffect(() => {
        axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/locations/${props.location}`)
            .then(response => {
            // console.log(`this is the display location`, response.data.location)
            setPlace({ place: response.data.location })
            })
            .catch(error => {
            console.log(error)
            })
      }, [])

      useEffect(() => {
        //   console.log(props.organizerID)
        axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/organizers/${props.organizerID}`)
            .then(response => {
            // console.log(`these are the organizers`, response)
            setOrganizer({ oranizer: response.data.name })
            })
            .catch(error => {
            console.log(error)
            })
      }, [])

return (
  <div>
    <Row>
      <Col sm="6" lg="12">
        <Link to={`/user-browsing-page/browse-all-list/${props.key}`}>
          <Card>
            <CardImg top width="100%" src={props.image} alt={props.title} />
            <CardBody {...props.key}>
              <CardTitle>{props.title}</CardTitle>
              <CardSubtitle>{props.desc}</CardSubtitle>
              <CardText>{place.place}</CardText>
              <CardText>{props.hours}</CardText>
              <CardText>{props.date}</CardText>
              <CardText>{oranizer.oranizer}</CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    </Row>
  </div>
);
};

export default UserBrowsingCards
