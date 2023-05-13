import styled from "styled-components"
import {Button} from "../../templates/Button"
import heroImage from "../../assets/heroImages/heroImage.jpg"
import {NavLink} from "react-router-dom"
const HeroSection = ({myData})=>{
  const { name,img } = myData;
  
  const Wrapper = styled.section`
  padding: 5rem 5rem;

  img {
    min-width: 10rem;
    height: 20rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      text-align:left;
    }

    h1 {
      text-transform: capitalize;
      text-align:left;
      font-weight: bold;
    }
  }

  .hero-section-image {
    max-width:500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  figure {
    position: relative;
     img{
       border-radius:2rem;
       box-shadow:-5px -5px 10px #eee;
     }
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(255, 150,0, 0.4);
      border-radius:2rem;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
    
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    section{
      padding: 5rem 0rem
    }
    .grid {
      padding: 12rem 0rem;
      gap: 10rem;
      margin:-2rem auto;
      width:90%;
      display:flex;
      justify-contents: center;
      align-items:center;
      flex-wrap: wrap-reverse;
    }
    .hero-section-data,.hero-section-image{
    min-width:100%;
    display:flex;
    justify-contents: center;
    flex-direction:column;
    align-items: center;
    }.hero-section-data{
    .intro-data{
      text-align: center;
      width:90%;
    }
    h1{
      font-size:4.5rem;
      filter:drop-shadow(2px 2px 1px #aaa);
    }
    }
    figure{
    img{
      width:300px;
      height:200px;
    }
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: -10%;
      top: -15%;
      /* bottom: 10%; */
      background-color: rgba(0, 200, 248, 0.6);
    }
  
  }
`;
  return (
    <Wrapper>
      <div className="contianer">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <p>
              Do incididunt aute anim esse nulla voluptate esse laboris aute aute. Nulla nisi aliquip enim occaecat cupidatat excepteur exercitation et officia ipsum velit elit. Reprehenderit irure cillum incididunt ea consectetur proident ipsum aute culpa eiusmod excepteur anim. Nulla et Lorem pariatur nostrud est ad nostrud cillum cupidatat minim fugiat et irure nulla. Exercitation in anim laborum minim et officia quis dolore eu qui culpa. Minim veniam proident sit deserunt anim pariatur est ex aliquip duis. Laborum cillum minim officia proident cupidatat laborum ut.<br/>
            </p>
            <NavLink to="/category">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src={img} alt="Hreo section images"/>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
    )
}
export default HeroSection