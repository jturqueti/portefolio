import React from 'react';
import styled from "styled-components";
import Burger from './Burger';

const Nav = styled.nav`
height: 60px;
padding: 0 20px;
display: flex; 
font-size: 1.3em;
color: #32b7a4;
justify-content: space-between;
`

const NavBar = () => {
    return (
        <div>
         <Nav>
             <div></div>
             <Burger />
         </Nav>
</div>
    )
}

export default NavBar
