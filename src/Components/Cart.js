import { useDispatch, useSelector } from "react-redux";
import { decreamentQty, incrementQty, removeQty } from "../Redux/CartSlice";

function Cart()
{
  const carts = useSelector(state=>state.cart.value)
  const dispatch = useDispatch()

  
  console.log(carts)

  return<div className="container">
    <h3 className="alert-success ">Shopping Cart</h3>
    <div className="row">
      <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Product Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((data,index)=>{
            return<tr>
              <td>{index+1}</td>
              <td><img src={data.addData.thumbnail} width={80} height={80}/> </td>  
              <td>{data.addData.title} /{data.addData.brand}/{data.addData.category}</td>
              <td>$.{data.addData.price}</td>
              <td>
                <button className="btn btn-success" 
                onClick={() => dispatch(decreamentQty(data.addData.id))}>
                  -
                </button> &nbsp;
                
                {data.qty}  &nbsp;

                <button className="btn btn-danger" 
                onClick={(()=>dispatch(incrementQty(data.addData.id)))}>
                  +
                </button>
              </td>
              <td><b>$.{data.addData.price*data.qty}</b></td>
              <td>
                <button className="btn btn-danger" 
                onClick={(()=>dispatch(removeQty(data.addData.id)))}>
                  Remove Item
                </button>
              </td>
            </tr>
          })}
          
        </tbody>
      </table>

    </div>
  </div>
}
export default Cart;