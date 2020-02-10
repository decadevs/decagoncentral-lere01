import React from "react";
import Decagon from '../images/logo.png';
import {PictureDiv, FormDiv, SignupDiv} from './styledComponents'

const PictureOverlay = () => {
  return (
     <SignupDiv> 
    <PictureDiv>
      <img src={Decagon} />
      <p>
        Decagon is a software engineering institute ushering in a new phase of
        tech-powered growth and prosperity in Nigeria by training and deploying
        an army of leader-developers.
      </p>
    </PictureDiv>
    <FormDiv>
    <a href="/login"><p className="link">Login</p></a>
     <h3>Create profile</h3>
     <div className="fullname">
     <div>
     <label for="full-Name"> full Name:</label><br/>
     <input id="full-Name" className="full-name" type="text"/>
     </div>
     <div>
     <label for="username" className="username" > Username:</label><br/>
     <input id="username" className="username" type="text"/><br/>
     </div>
     </div>
     <label for="password"> Password:</label><br/>
     <input id="password" className="input" type="password"/><br/>
     <label for="email"> Email:</label><br/>
     <input id="email" className="input"  type="email"/><br/>
     <label for="position"> Position:</label><br/>
     <input id="position" className="input"  type="text"/><br/>
     <div className="button">
     <input type="submit" className="submit" value="Join now"/>
     <a href="/login"><p className="login">Login</p></a>
     </div>
    </FormDiv>
    </SignupDiv>
  );
};

export default PictureOverlay;
