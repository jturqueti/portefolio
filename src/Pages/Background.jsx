import React from "react";
import RightAlignedTimeline from "../Components/RightAlignedTimeline";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Cv from "../Components/Cv";

const ContainerBg = styled.div`
  padding: 3% 2% 0 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
`;

const ContainerSentence = styled.div`
  width: 900px;
`;
const ContainerButton = styled.div`
  justify-content: center;
  align-items: center;
  width: 30%;
`;

class Background extends React.Component {
  state = { showing: false };

  render() {
    const { showing } = this.state;
    return (
      <div>
        <ContainerBg >
          <ContainerSentence>
          <Typography variant="h2">Hey hey, Lorem ipsum</Typography>
            <Typography variant="h3">
              Dolor sit amet consectetur adipisicing elit. Facere cum amet iste,
              commodi reprehenderit similique nesciunt quidem reiciendis debitis
              placeat, maiores quisquam eius. Dolore tenetur obcaecati eligendi
              dolorum blanditiis culpa!
            </Typography>
          </ContainerSentence>
          <ContainerButton>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.setState({ showing: !showing })}
            >
              {showing ? "Close" : "Open"}{" "}
            </Button>
          </ContainerButton>
        </ContainerBg>
        {showing ? <RightAlignedTimeline /> : null}
        <ContainerBg ><ContainerSentence>
        <Cv /></ContainerSentence>
        <ContainerButton>
        <p>yoy</p> </ContainerButton>
        </ ContainerBg>
      </div>
    );
  }
}

export default Background;
