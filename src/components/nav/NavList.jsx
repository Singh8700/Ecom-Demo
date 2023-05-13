import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
const list = [
   {
     id:3,
     icons:<BiBook/>,
     title:"Category",
     text:"Category",
     link:"/singleproduct"
   },{
     id:4,
     icons:<RiServiceLine/>,
     title:"About",
     text:"About",
     link:"/about"
   },{
     id:1,
     icons:<AiOutlineHome/>,
     title:"Home",
     link:"/"
   },{
     id:2,
     icons:<AiOutlineUser/>,
     title:"Account",
     text:"Account",
     link:"/account"
   },{
     id:5,
     icons:<BiMessageSquareDetail/>,
     title:"Contact",
     text:"Contact",
     link:"/contact"
   }
 ]
 export default list