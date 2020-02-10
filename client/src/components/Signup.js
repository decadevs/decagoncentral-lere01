import React from "react";
import Decagon from '../images/logo.png';
import {Link, useHistory} from 'react-router-dom'
import {PictureDiv, FormDiv, SignupDiv} from './styledComponents'
import { useRef } from "react";
import { Select } from "semantic-ui-react";

const Signup = () => {
  const fullname = useRef('')
  const username = useRef('')
  const email = useRef('')
  const password = useRef('')
  const position = useRef('')
  const history = useHistory()
  const handleClick = async () => {
    const data = {
      fullname: fullname.current.value,
      username: username.current.value,
      password: password.current.value,
      email: email.current.value,
      position: position.current.value
    }
    const create = await fetch('http://127.0.0.1:8000/centerapi/create_user/',
    {
      method:'POST',
      headers:{
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(data)
    })
    const res = await create.json()
    history.push('/dashboard')
  }
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
    <Link to='/login'><p className="link">Login</p></Link>
     <h3>Create profile</h3>
     <div className="fullname">
     <div>
     <label htmlFor="full-Name"> Full Name:</label><br/>
     <input ref={fullname} id="full-Name" className="full-name" type="text"/>
     </div>
     <div>
     <label htmlFor="username" className="username" > Username:</label><br/>
     <input ref={username} id="username" className="username" type="text"/><br/>
     </div>
     </div>
     <label htmlFor="password"> Password:</label><br/>
     <input ref={password} id="password" className="input" type="password"/><br/>
     <label htmlFor="email"> Email:</label><br/>
     <input ref={email} id="email" className="input"  type="email"/><br/>
     <label htmlFor="position"> Position:</label><br/>
     {/* <input ref={position} id="position" className="input"  type="text"/><br/> */}
     <select ref={position} id="position" className="input selectinput">
       <option name="postion" value="Recruitment Manager" disabled selected></option>
       <option name="postion" value="Recruitment Manager">Recruitment Manager</option>
       <option name="postion" value="Human Resource Manager">Human Resource</option>
       <option name="postion" value="Trainer">Trainer</option>
       <option name="postion" value="Developer">Developer</option>
       <option name="postion" value="Program Director">Program Director</option>
     </select>
     <div className="button">
     <input onClick={handleClick} type="submit" className="submit" value="Join now"/>
     <Link to='/login'><p className="login">Login</p></Link>
     </div>
    </FormDiv>
    </SignupDiv>
  );
};

export default Signup;
