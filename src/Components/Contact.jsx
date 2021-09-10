import { ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import theme from "./theme";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import styled from "styled-components";

const ContainerContact = styled.div`
  padding-top: 2%
  background: #32b7a4; 
`;

const BoxContact = styled.div`
min-width: 30%;
min-height: 40%;
margin: 2%
`



export default function Contact() {
  return (
    <ContainerContact>
    <ThemeProvider theme={theme}>
      <section className="flex-row-contact flex-row">
        <BoxContact>
          <Typography color="primary" variant="h2">Let's meet each other!</Typography>
       <Typography>You can direclty choose a time slot in my agenda
</Typography>
<Button variant="contained" color="secondary">
            Schedule a meeting
          </Button>
        </BoxContact>


        <div className="box-personal-details">
          <div>
          <EmailIcon />
              <Typography>
                <a href="mailto:julia.turqueti@gmail.com">
                  julia.turqueti[at]gmail.com
                </a>
              </Typography>
          </div>
          <div> <PhoneAndroidIcon />
              <Typography>+33 7 68 61 33 57</Typography></div>
       <div><Typography>
                <LinkedInIcon /><br></br>
                <a href="https://www.linkedin.com/in/julia-turqueti/" rel="noreferrer" target="_blank">
                  LinkedIn Profile
                </a>
              </Typography></div>
             
        </div>
      </section>
    </ThemeProvider>
    </ContainerContact>
  );
}
