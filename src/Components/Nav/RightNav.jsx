import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flew-flow: row nowrap;
  z-index: 2;

  li {
    padding: 20px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0; 
    right: 0;
    height: 100vh;
    width: 150px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({open}) => {
  return (
    <div>
      <Ul open={open}>
        <li>Home</li>
        <li>Skills</li>
        <li>Background</li>
        <li>Contact</li>
      </Ul>
    </div>
  );
};

export default RightNav;
