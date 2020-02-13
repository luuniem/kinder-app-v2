import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  opacity: 0.9;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 30vw;
  min-height: 100%;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  -webkit-box-shadow: 3px 0px 9px -1px rgba(148, 148, 148, 1);
  -moz-box-shadow: 3px 0px 9px -1px rgba(148, 148, 148, 1);
  box-shadow: 3px 0px 9px -1px rgba(148, 148, 148, 1);
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f5f6f6+0,dbdce2+21,b8bac6+49,dddfe3+80,f5f6f6+100;Grey+Pipe */
  background: rgb(245, 246, 246); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(245, 246, 246, 1) 0%,
    rgba(219, 220, 226, 1) 21%,
    rgba(184, 186, 198, 1) 49%,
    rgba(221, 223, 227, 1) 80%,
    rgba(245, 246, 246, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(245, 246, 246, 1) 0%,
    rgba(219, 220, 226, 1) 21%,
    rgba(184, 186, 198, 1) 49%,
    rgba(221, 223, 227, 1) 80%,
    rgba(245, 246, 246, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(245, 246, 246, 1) 0%,
    rgba(219, 220, 226, 1) 21%,
    rgba(184, 186, 198, 1) 49%,
    rgba(221, 223, 227, 1) 80%,
    rgba(245, 246, 246, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6', endColorstr='#f5f6f6',GradientType=1 ); /* IE6-9 */

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
