import React from "react";



function SkillsCSS(props) {
  return (
    <div className="wrapper">
      <div className="column">
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front">
              <div className="inner">
                <p>{props.nom}</p>
                <span>Hover me!</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="skills-progress">
                <label>{props.label1}</label>
<progress max="100" value={props.value1}>{props.progress1}</progress>
<br/>
<label>{props.label2}</label>
<progress max="100" value={props.value2}>{props.progress2}</progress>
<br/>
<label>{props.label3}</label>
<progress max="100" value={props.value3}>{props.progress3}</progress>
<br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCSS;
