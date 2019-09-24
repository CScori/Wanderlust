import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./GeneralLandingPage.css";
import { Link } from "react-router-dom";
import data from "../images/gerneral-landing-images/dummyData";
/* ===== styled components ======= */
const Header = styled.div`
  color: white;
  font-size: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 2.5% 50px;
  background-image: linear-gradient(to right, #565f64, #eeeff3);
`;

const Button = styled.button`
  padding: 5px 40px;
  margin: 10px auto;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

const GeneralLanding = styled.div`
  /* border: 2px solid yellow; */
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
/* ====== COMPONENT =======  */
const GeneralLandingPage = props => {
  /* ====== VARS, STATE, FUNCS ========== */

  const [experiences, setExperiences] = useState();

  const routeToUserBrowsing = event => {
    event.preventDefault();
    props.history.push("/user-browsing-page");
  };
  const routeToCreateExp = event => {
    event.preventDefault();
    props.history.push("/creator-create-experience-form");
  };
  /* https://wanderlustbw.herokuapp.com/experiences */
  useEffect(() => {
    setExperiences(data);
  }, [experiences]);

  console.log("experiences data", experiences);
  /* ======= RETURN =========  */
  return (
    <>
      <Header>
        Wanderlust
        <nav className="gerneral-header-nav">
          <Link className="header-link" to="/user-browsing-page">
            My Trip History
          </Link>
          <Link className="header-link" to="/creator-viewing-page">
            My Created Trips
          </Link>
        </nav>
      </Header>
      <GeneralLanding>
        <h1>Find a trip or create your own</h1>
        <div className="create-or-find">
          <div className="create-or-find-btns">
            <Button onClick={routeToCreateExp}>Create</Button>
            <Button onClick={routeToUserBrowsing}>Serch for more trips</Button>
          </div>

          <div className="featured-experiences">
            <h2>Featured Experiences:</h2>
            <div>
              <FeaturedTrips />
            </div>
          </div>
        </div>
      </GeneralLanding>
    </>
  );
};

export default GeneralLandingPage;

function FeaturedTrips() {
  return (
    <div className="featured-trips-wrapper">
      {data.map(trip => (
        <div className="trip-card" key={trip.id}>
          <h3>Adventure: {trip.name}</h3>
          <img src={trip.image_url} alt="" />
          <button className="learn-more">Learn More</button>
        </div>
      ))}
    </div>
  );
}
