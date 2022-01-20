import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const {user,cart}=useSelector((state)=>({...state}))
  const getTotal=()=>{
      return cart.reduce((f,s)=>{
         return f+s.count*s.price;
      },0)
  }
  const handleDb=()=>{

  }
    return (
        <div className='container-fluid'>
           <div className='row pt-3'>
              <div className='col-md-7'>
                {!cart.length?(
                  <>
                    <h5>No Product in the cart</h5>
                    <Link to="/shop">Continnue Shopping...</Link>
                  </>
                  ):(
                  <CartItem cart={cart}/>
                )}
              </div>
              <div className='col-md-4'>
                  <h4>Order Summary</h4>
                  <hr/>
                  {
                    cart.map((p)=>(
                        <div key={p._id}>
                          <p>
                              {p.title}x{p.count}=${p.price*p.count}
                          </p>
                        </div>
                    ))
                  }
                  <hr/>
                  Total Price: ${getTotal()}
                  <hr/>
                  {
                     user?<button 
                     disabled={!cart.length}
                     onClick={handleDb} 
                     className='btn btn-sm btn-primary mt-2'>
                         Proceed to checkout
                     </button>:<button btn btn-sm btn-primary mt-2>
                        <Link to={{
                            pathname:"/login",
                            state:{from:"cart"},
                        }}>
                           Log in to checkout
                        </Link>
                     </button> 
                  }
              </div>
           </div>
        </div>
    );
};

export default Cart;