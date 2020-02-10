import React from "react";
import { Link } from "react-router-dom";
import {
  BigBoxWhite,
  InnerContainer,
  BigBox,
  SmallBoxWhite,
  TextBox,
  PictureBox,
  DashboardFooter,
  DashRightDiv
} from "../components/styledComponents";
import HiImage from "../images/Image 5.png";
import RightArrow from "../images/arrow.png";
import Employee from "../images/employee.png";
import Dev from "../images/dev.png";
import ProImage from "../images/update1.png";
import PasImage from "../images/update2.png";

const Contents = (props) => {
  return (
    <DashRightDiv>
      <InnerContainer>
        <h1>Decagon Central</h1>

        <BigBoxWhite>
          <TextBox>
            <h3>Hi {props.name}!!</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </TextBox>
          <PictureBox>
            <img itemID="firstimg" src={HiImage} alt="" />
          </PictureBox>
        </BigBoxWhite>

        <BigBox>
          <SmallBoxWhite>
            <TextBox>
              <h3>Find an employee</h3>
              <p>Change your profile name, picture, twitter handle and bio.</p>
              <a href="#">
                Search Employee <img src={RightArrow} alt="" />
              </a>
            </TextBox>
            <PictureBox>
              <img src={Employee} alt="" />
            </PictureBox>
          </SmallBoxWhite>

          <SmallBoxWhite>
            <TextBox>
              <h3>Find a Dev</h3>
              <p>Change your profile name, picture, twitter handle and bio.</p>
              <a href="#">
                Search Dev <img src={RightArrow} alt="" />
              </a>
            </TextBox>
            <PictureBox>
              <img src={Dev} alt="" />
            </PictureBox>
          </SmallBoxWhite>
        </BigBox>

        <BigBox>
          <SmallBoxWhite>
            <TextBox>
              <h3>Update profile</h3>
              <p>Change your profile name, picture, twitter handle and bio.</p>
              <a href="#">
                Update profile <img src={RightArrow} alt="" />
              </a>
            </TextBox>
            <PictureBox>
              <img src={ProImage} alt="" />
            </PictureBox>
          </SmallBoxWhite>

          <SmallBoxWhite>
            <TextBox>
              <h3>Update Password</h3>
              <p>Update your password.</p>
              <a href="#">
                Update profile <img src={RightArrow} alt="" />
              </a>
            </TextBox>
            <PictureBox>
              <img src={PasImage} alt="" />
            </PictureBox>
          </SmallBoxWhite>
        </BigBox>
      </InnerContainer>

      <DashboardFooter>
        <Link to="/login">Logout</Link>
        <Link to="#">DecaDev</Link>
      </DashboardFooter>
    </DashRightDiv>
  );
};

export default Contents;
