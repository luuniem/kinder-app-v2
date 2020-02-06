import React, { Fragment } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import "./Menu.scss";
import { Link } from "react-router-dom";
import coloring from "../../images/coloring.png";
import stories from "../../images/stories.png";
import points from "../../images/points.png";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} className="styled__menu">
      <ul className="menu__list">
        <li>
          <Link to="/">Home</Link>
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
            <img src={coloring} />
            Coloring Pages
          </Link>
        </li>
        <li className="stories__container">
          <Link to="/stories">
            <img src={stories} />
            Stories
          </Link>
        </li>
        <li className="points__container">
          <Link to="/points-prizes">
            <img src={points} />
            Points & Prizes
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
