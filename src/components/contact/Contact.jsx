import styled from "styled-components";

import Maps from "../maps/Maps"
const Contact = () => {
  
  const Wrapper = styled.section`
    padding: 0 0 10rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input,textarea{
          white-space: pre-wrap;
          word-wrap: break-word;
          border-radius:1.5rem;
          resize: none;
          border: none;
          outline: none;
          }
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            align-self:center;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
return <Wrapper>
<div className="container">
 <Maps/>
   <div className="contact-form ">
   <h2> Your Query </h2>
    <form action="https://formspree.io/f/mrgvdbzp" method="POST" className="contact-inputs">
    <input type="text" 
    placeholder="User Name"
    name="userName"
    required autoComplete="off"/>
    <input type="email" 
    placeholder="User Email"
    name="email"
    required autoComplete="off"/>
    <textarea name="massage" 
    placeholder="Your massage"
    cols="30"
    rows="12"
    required 
    autoComplete="off"></textarea>
    <input type="submit" value="Send Query"/>
    </form>
  </div>
 </div>
</Wrapper>
  
};

export default Contact
