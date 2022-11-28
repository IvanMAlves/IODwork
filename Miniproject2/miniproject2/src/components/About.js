import React from "react";

const About = () => {
    return (
      <div>
        <h1>About</h1>
        <p>This small app is to demonstrate basic REACT concepts.
          It connects to a Warhammer Age of Sigmar API which has a list of units under each faction and the size of the base the models belong.
          The API only has a GET function and no further information can be pushed. They do have a search function, however this search function is not overly strong.
          This react uses MUI and features such as a navigation bar, sandwich menu (not updated), basic MUI cards and Accordion.
        </p>
        <p>
          This was created by Ivan Alves November 2022.
        </p>
      </div>
    );
  };
  
  export default About;
  