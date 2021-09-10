import React from "react";
import { Typography } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <header className="home-row-header fadein">
        <div>
          <Typography variant="h1">Welcome!</Typography>
          <Typography variant="h2">
            I'm Julia Turqueti, a digital project manager! <br />I love new
            challenging projects!
          </Typography>
        </div>

        <img
          className="img30pc"
          src="/images/coding-girl.png"
          alt="coding-person"
        />
      </header>
    </div>
  );
}
