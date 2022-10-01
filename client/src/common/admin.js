import axios from "axios";

export const getOrders=async(authtoken)=>{
    return await axios.get(
      `${process.env.REACT_APP_API}/admin/orders`,
       {
        headers:{
          authtoken
          }
       },
     );
  };
  
  export const updateOderStatus=async(orderId,orderStatus,authtoken)=>{
    return await axios.put(
      `${process.env.REACT_APP_API}/admin/order-status`,
      {orderId,orderStatus},
      {
        headers:{
          authtoken
        }
      }
    )
  }
  