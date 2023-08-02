import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeRounded, WorkRounded } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import resumeData from "../../Utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigation function

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home Link*/}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link*/}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link*/}
          <Nav.Link
            as={NavLink}
            to="/Portfolio"
            className={
              pathName === "/Portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton
            text={"Hire Me"}
            icon={<WorkRounded />}
            onClick={() => navigate("/hire")} // Use the navigate function here
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
