import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const { loggedIn, email } = props;

  const navigate = useNavigate();         

  const onLoginButtonClick = () => {
    navigate("/logincomponent");
  };

  const onSignupButtonClick = () => {
    navigate("/Registration");
  };

  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      
      <div className={"buttonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={loggedIn ? onLoginButtonClick : onSignupButtonClick}
          value={loggedIn ? "Log in" : "Sign up"}
        />
        {loggedIn ? (
          <input
            className={"inputButton"}
            type="button"
            onClick={onLoginButtonClick} 
            value="Log out"
          />
        ) : null}
        {loggedIn ? (
          <div>Your email address is {email}</div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Home;
