import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e0efff;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 30vw;
  min-height: 100%;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9998;
  -webkit-box-shadow: 3px 0px 9px -1px rgba(148, 148, 148, 1);
  -moz-box-shadow: 3px 0px 9px -1px rgba(148, 148, 148, 1);
  box-shadow: 3px 0px 9px -1px rgba(148, 148, 148, 1);

  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 1.25rem;
    // text-transform: uppercase;
    // padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: red;
    }
  }
`;
