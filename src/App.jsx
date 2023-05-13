import { useState } from 'react'
import {
  useLocation,
  Routes,
  Route
} from "react-router-dom"
import Theme from "./templates/Themes"
import {ThemeProvider} from "styled-components"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"
import Nav from "./components/nav/Nav"
import SingleProduct from "./components/singleProduct/SingleProduct"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Error from "./components/error/Error"

import {GlobalStyle} from "./templates/GlobalStyle"
function App() {
  
  const [count, setCount] = useState(0)
  const location = useLocation();
  const path=location.pathname;
  
  return (
   
    <ThemeProvider theme={Theme}>
    <GlobalStyle/>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
   <Route path="/singleproduct/:id" element={<SingleProduct />} />
    <Route path="*" element={<Error/>}/>
    </Routes>
    <Nav path={path}/>
    <Footer/>
    </ThemeProvider>
  )
}

export default App
