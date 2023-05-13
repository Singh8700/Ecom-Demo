import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper id="mob">
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding: 2rem 3.2rem;
  color:#999;
  font-weight:900;
  a {
    font-size: 2.2rem;
    color:#999;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    position:relative;
    left:-10%;
    top:0%;
    padding-left:5rem;
    border-bottom-right-radius:2rem;
    background-color:#ccc;
    color:#fff;
    a{
      color:#fff;
    }
  }
`;

export default PageNavigation;
