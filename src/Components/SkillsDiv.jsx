import React from "react";
//import Skills from "./Skills";
import SkillsCSS from "./SkillsCSS";

function SkillsDiv() {
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, dolore
        error dicta at pariatur veniam provident quae? Quos perspiciatis animi
        fugit vitae reiciendis omnis in doloribus, tenetur asperiores? Magnam,
        facere.
      </div>
      <div className="box-skills">
        <SkillsCSS
          nom="Digital Marketing"
          label1="Affiliate Marketing"
          value1="90"
          label2="WordPress"
          value2="70"
          label3="Google Ads & Analytics"
          value3="60"
        />
        <SkillsCSS
          nom="Web Development"
          label1="HTML"
          value1="90"
          label2="CSS"
          value2="90"
          label3="React"
          value3="50"
        />
        <SkillsCSS
          nom="Project Managelent & Sales"
          label1="Microsoft Office"
          value1="90"
          label2="Pipe Drive"
          value2="90"
          label3="Google Analytics"
          value3="50"
        />
      </div>
    </div>
  );
}

export default SkillsDiv;
