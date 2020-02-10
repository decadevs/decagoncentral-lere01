import styled from "styled-components";
import image from "../images/image.png";


export const SignupDiv = styled.div`
    display: flex;
`

export const PictureDiv = styled.div`
  height: 100vh;
  width: 45vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  background: url(${image});
  background-position: center;
  background-size: cover;
  opacity: 0.9;
  color: white;

  img {
    margin-left: -45%;
  }
  p {
    padding-left: 8%;
    padding-right: 20%;
  }
`;

export const FormDiv = styled.div`
  height: 100vh;
  width: 55vw;
  background-color: #f2f6fa;

  .link{
      margin-left:70%;
      color:#34A853; 
      padding-top: 80px;
      padding-bottom: 60px;
  }
  .button{
      display: flex;
  }

  .submit{
    border-radius: 14px;
    color: white;
    width: 120px;
    height: 30px;
    background-color: #34A853;
    margin-left: 10%;
  }
  .login{
      color: #1A572A;
      padding-top: 15px;
  }

  input {
    border: 0px;
    margin: 10px;
    height: 40px;
    border-radius: 5px;
  }
  h3 {
    padding-bottom: 20px;
    margin-left: 10%;
  }
  .input {
      width: 60%;
      margin-left: 10%;
  }

  .selectinput {
    height: 40px;
    border: none;
    margin-top: 0.8rem;
  }

  label{
    margin-left: 10%; 
  }

  .fullname{
    display: flex;
    margin-left: 8.5%;

    label{
        margin-left: 5%;    
    }
    input{
        width: 100%;
    }
    .username{
        margin-left: 68px
    }
    .full-name{
        width: 120%;
    }
  }
`;


export const DashboardDiv = styled.div`
display: flex;
`;

export const DashRightDiv = styled.div`
width:100%;
min-height: 100vh;
background: #F2F6FA 0% 0% no-repeat padding-box;
opacity: 1;
padding-top: 5rem;
padding: 5rem;
`;

export const InnerContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: start;
margin: 0 auto;
margin-left: 20%;
pading-left: 0;
`;



export const BigBoxWhite = styled.div`
display: flex;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
width: 85%;
min-height: 150px;
margin-top: 0.5rem;
margin-bottom: 0;
border-radius: 1.5rem 1.5rem 0 0;
padding: 3rem;
justify-content: space-between;

#firstimg {
  height: 50px;
}

firstImage{
  height: 50px;
}
`;

export const BigBox = styled.div`
width: 85%;
display: flex;
justify-content: space-between;
padding-left: 0;
margin-top: 3rem;
margin-bottom: 0;
`;

export const SmallBoxWhite = styled.div`
display: flex;
width: 47%;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
min-height: 150px;
border-radius: 1.5rem;
padding: 1rem;
justify-content: space-between;
`;

export const TextBox = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 55%;

h3 {
  font-weight: 900;
  letter-spacing: 0.1px;
  font-family: Boing;
  font-size: 20px;
  margin-bottom: 0.5rem;
}

p {
  font-weight: 400;
  letter-spacing: 0.63px;
  font-family: Montserrat;
  letter-spacing: 0.63px;
  color: #2D2F48;
  opacity: 1;
}

a {
  text-align: left;
  text-decoration: underline;
  font-weight: Bold;
  font-family: Montserrat;
  letter-spacing: 0.36px;
  color: #34A853;
  opacity: 1;
}
`;

export const PictureBox = styled.div`
padding: 0;
width: 35%;
heigth: 80px;

img{
  width: 80%;
  height: auto;
}
`;

export const DashboardFooter = styled.div`
width: 72%;
display: flex;
justify-content: space-between;
margin: 0 auto;
pading-left: 0;
margin-top: 5rem;
margin-bottom: 4rem;
margin-left: 20%;

a {
  color: #000;
  font-weight: 600;
}
`;

export const NavigationItem = styled.div`
display: flex;
justify-content: start;
align-items: flex-end;
text-align: left;
font-weight: 600;

img{
  width: 15px;
  heigth: auto;
  margin-right: 0.5rem;
}
`;

export const NavBarList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 5rem 0;

.nav-logo {
  padding-bottom: 3rem;
}

.dashboard-link {
  background: #fff;
  color: #000;
  width: 100%;
  padding: 0.5rem;
}
`;

export const NavBarLogo = styled.div`
margin-bottom: 3rem;
width: 80%;
`;