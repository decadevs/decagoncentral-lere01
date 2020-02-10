import React from "react";
import Decagon from "../images/logo.png";
import { Link } from "react-router-dom";
import { PictureDiv, FormDiv, SignupDiv } from "./styledComponents";

const Login = () => {
  return (
    <SignupDiv>
      <PictureDiv>
        <img src={Decagon} />
        <p>
          Decagon is a software engineering institute ushering in a new phase of
          tech-powered growth and prosperity in Nigeria by training and
          deploying an army of leader-developers.
        </p>
      </PictureDiv>
      <FormDiv>
        <a href="/login">
          <p className="link"></p>
        </a>
        <h3>Login</h3>
        <label for="email"> Email:</label>
        <br />
        <input id="email" className="input" type="email" />
        <br />
        <label for="password"> Password:</label>
        <br />
        <input id="password" className="input" type="password" />
        <br />
        <div className="button">
          <input type="submit" className="submit" value="Login" />
          <Link to='/signup'>
            <p className="login">create an account</p>
            </Link>
        </div>
      </FormDiv>
    </SignupDiv>
  );
};

export default Login;
