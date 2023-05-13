
import styled from "styled-components";
import HeroSection from "../heroSection/HeroSection"
import aboutImage from "../../assets/heroImages/fm.jpg"
import { useProContext } from "../contextApi/productContext"
const About=()=>{
  const {myName} = useProContext();
  
  const data = {
    name:"Rohit Singh ECommerce",
    img:aboutImage
  }
  return <>
{myName}
  <HeroSection myData={data}/>
  </>
}
export default About