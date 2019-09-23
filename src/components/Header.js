import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    const Bar = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 5vh;
    top: 0;
    padding: 1vh 5vw;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
    `;
    const Title = styled.h2`
    font-size: 2rem;
    `;
    const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    `;
    const NaviLink = styled.span`
    text-decoration: none;
    margin-left: 40px;
    `;

    return (
        <>
            <Bar>
                <Title>Wanderlust</Title>
                <Nav>
                    <NaviLink><Link to="/">Home</Link></NaviLink>
                    <NaviLink><Link to="/">Link3</Link></NaviLink>
                    <NaviLink><Link to="/">Link2</Link></NaviLink>
                </Nav>
            </Bar>
        </>
    )
}