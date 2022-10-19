import React from "react";
const FlipCard = (props) => {
  const user = props.user;
  const fullName = props.renderFullNameMethod(user);
  const Ocupation = props.testComponent;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Avatar"
            className="profileLogo"
          ></img>
        </div>
        <div className="flip-card-back">
          {fullName}
          <Ocupation/>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;