import React, { useRef, useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Home = props => {
  let { trans1, trans2, trans3 } = useRef(null);

  useEffect(() => {
    gsap.from([trans1, trans2, trans3], 0.8, {
      delay: 0,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.5
      }
    });
  }, [trans1, trans2, trans3]);

  return (
    <div className="home__container">
      <br></br>
      <h1>Welcome Emily!</h1>
      <div className="box_containers" ref={el => (trans1 = el)}>
        <Link to="/addition">Addition (+)</Link>
        <Link to="/subtraction">Subtraction (-)</Link>
      </div>
      <div className="box_containers" ref={el => (trans2 = el)}>
        <Link to="/multiplication">Multiply (x)</Link>
        <Link to="/points-prizes">Prizes</Link>
        <Link to="/division">Divide (÷)</Link>
      </div>
      <div className="box_containers" ref={el => (trans3 = el)}>
        <Link to="/coloring-pages">Coloring</Link>
        <Link to="/stories">Stories</Link>
      </div>
    </div>
  );
};

export default Home;
