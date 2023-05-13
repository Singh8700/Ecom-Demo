import {useState} from "react"
import styled from "styled-components"
import {FiShoppingCart} from "react-icons/fi"

import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
const Header =()=>{
  const [cartValue,setCartValue]=useState();
  const MainHeader = styled.header`
  padding:0 0.48rem;
  height:10rem;
  background-color:${({theme})=> theme.colors.bg};
  display:flex;
  justify-content:space-between;
  align-items:center;
  .navlink{
    width:350px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  img{
    width:350px;
    object-fit:cover;
    padding-top:2rem;
  }
  }
  .carts-icon{
  padding-right:5rem;
    position:relative;
    .cart-icon{
      position:relative;
      color:${({theme})=> theme.colors.helper};
      font-size:3.2rem;
    }
    .cart-item{
      width:2.4rem;
      height:2.4rem;
      position:absolute;
      background-color:#000;
      color:#000;
      border-radius:50%;
      display:grid;
      place-item:center;
      top:-30%;
      left:30%;
      transform:translateY(-20%);
      background-color:${({theme})=> theme.colors.helper};
      font-size:1.7rem;
      text-align:center;
    }

  }
  
  `;
  return (
  <MainHeader>
    <NavLink to="/" className="navlink">
      <img src={logo} alt="logo"/>
    </NavLink>
    <div className="carts-icon">
      <FiShoppingCart className="cart-icon"/>
      {cartValue?
      <span className="cart-item">{cartValue}</span>
      :
      <span> </span>
      }
    </div>
  </MainHeader>
  )
}
export default Header