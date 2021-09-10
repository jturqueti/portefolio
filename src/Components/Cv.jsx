import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const ContainerBg = styled.div`
  padding: 2%;
`;


export default function Cv() {
  return (
    <div>
                <div className="box-cv">
         <Typography variant="h3">If you prefer a classical resume, here is a PDF version just for!</Typography>
          <br/>
          <span className="btn-padding">
          <a className="btn-basis bg-blue" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julia-turqueti/">
          French CV
                </a></span>
                <span>  <a className="btn-basis bg-blue" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julia-turqueti/">
          English CV
                </a></span>
        </div>
      </div>
  );
}
