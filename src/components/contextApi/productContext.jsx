import { useReducer,useEffect, createContext , useContext} from "react"
import axios from "axios"

import reducer from "./ContextApi"
//create global level Context 
const ProContext = createContext();

  const API = "https://productlist.onrender.com/All_Produts"
 // const API = "https://api.pujakaitem.com/api/products"
const initialState = {
  isLoading:false,
  isError:false,
  products:[],
  featureProducts:[],
  isSingleLoading:false,
  singleProduct:{},
}
//create data provider to childs
const ProProvider = ({children})=>{
  const [state, dispatch ] = useReducer(reducer, initialState);
  //get api data for the function & async
  const getProducts = async (url)=>{
    
    dispatch({type:"Set_Data"});
    try{
    //await to get fatch all api data
    const res = await axios.get(url);
    //console.log("your respoen",res)
    //await after product data get;
    const products = await res.data;
    dispatch({type:"Set_API_Data", payload:products});
    } catch (error){
      dispatch({type:"API_Error"});
    }
  }
  //single Product Get 
const getSingleProduct = async (url)=>{
  dispatch({type:"SET_SINGLE_ITEM"});
  try{
  const res = await axios.get(url);
    //console.log("your respoen",res)
    //await after product data get;
    const product = await res.data;
    dispatch({type:"Set_SINGLE_PRODUCT", payload: product });
    } catch (error){
      dispatch({type:"SINGLE_ERROR"});
    }
}
  
  useEffect(()=>{
    getProducts(API)
  },[])
  return (
  <ProContext.Provider value={{...state, getSingleProduct}}>
  {children}
  </ProContext.Provider>
  )
}

// use custom hook to provide the data for childs
const useProContext =()=>{
  return useContext(ProContext);
}

export { ProProvider, ProContext, useProContext };