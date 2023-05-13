
const ContextApi = (state, action)=>{
  
  switch (action.type) {
    case "Set_Data":
      return{
        ...state,
        isLoading:true,
      }
    case "Set_API_Data":
       const featureData = action.payload.filter((curtElem)=>{
          return curtElem.featured === true;
        })
       return{
         ...state,
         isLoading:false,
         products: action.payload,
         featureProducts : featureData
       }
    case "API_Error":
      return{
        ...state,
        isLoading:false,
        isError:true
      }
    case "SET_SINGLE_ITEM":
      return {
        ...state,
        isSingleLoading:true
      }
    case "Set_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading:false,
        singleProduct :action.payload
      }
    case "SINGLE_ERROR":
      return{
        ...state,
        isSingleLoading:false,
        isError:true
      }
    default:
      return state;
  }
  
}
export default ContextApi;