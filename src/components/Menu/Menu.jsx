import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import "./Menu.scss";
import { Link } from "react-router-dom";
import coloring from "../../images/coloring.png";
import stories from "../../images/stories.png";
import points from "../../images/points.png";
import tinkerbell from "../../images/tinkerbell-home-icon.png";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} className="styled__menu">
      <ul className="menu__list">
        <li className="list__home__container">
          <Link to="/">
            <img
              alt="placeholder images"
              className="tinkerbell-home-icon"
              src={tinkerbell}
            />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <h2>Math</h2>
          <div className="math__container">
            <Link to="/addition">+</Link>
            <Link to="/subtraction">-</Link>
            <Link to="/multiplication">x</Link>
            <Link to="/division">÷</Link>
          </div>
        </li>
        <li className="coloring__container">
          <Link to="/coloring-pages">
            <img alt="placeholder images" src={coloring} />
            <span>Coloring</span>
          </Link>
        </li>
        <li className="stories__container">
          <Link to="/stories">
            <img alt="placeholder images" src={stories} />
            <span>Stories</span>
          </Link>
        </li>
        <li className="points__container">
          <Link to="/points-prizes">
            <img alt="placeholder images" src={points} />
            <span>Prizes</span>
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
