import styled from "styled-components";
import HeroSection from "../heroSection/HeroSection"
import FeaturedApi from "../featured/FeatureProduct"
import Services from "./Services"
import heroImage from "../../assets/heroImages/heroImage.jpg"
const Home=()=>{
  const data = {
    name:"Rohit Singh Store",
    img:heroImage
  }
  return (
  <>
  <HeroSection myData={data}/>
  <FeaturedApi/>
  <Services/>
  </>
  )
}
export default Home