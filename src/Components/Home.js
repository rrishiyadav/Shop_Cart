import { useEffect, useState } from "react";
import WebService from "../Services/WebService";
import WebApi from "../Services/WebApi";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/CartSlice";

function Home()
{
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();

    var loadProduct = async () =>{
        const response = await WebService.getproductData(WebApi.getProduct)
        console.log(typeof response)

        var data = JSON.stringify(response)
        console.log("data is : "+data)

        setProducts(response.data.products)
    }

    useEffect(()=>{  //useEffect Hook allows you to perform side effects in you components.
        // Some examples of side effects are: fetching data, directly updating the DOM, and timers. it take 2 arg. => useEffect useEffect(<funct>, <dependency>)

loadProduct(); // create function
},[]);
  return<div >
    <h1 style={{textAlign:"center", color:"red"}}>
        Show Product Here!
    </h1>
    <br/>
    <div className="row">
        {/* <div className="col-md-3"> */}
        {products.map((data)=>{
            <br/>
        return<div className="col-xl-3 col-lg-3">
                <div style={{margin:"5px"}} className="text-center">
                    <img style={{borderRadius:"0%"}} className="img-thumbnail" src={data.thumbnail}
                    alt="Image Not Found" width={200}
                    height={200}/>
                    <br/><br/>
                    <h5 align="center">{data.title} : {data.price}</h5>
                    <b>Discount price : {data.discountPercentage}</b>
                    <br/>
                    <b>{data.brand} : {data.category}</b>
                    <br/>
                    <button className="btn btn-primary" onClick={()=>dispatch(addItem(data))}>Add to card</button>
                </div>
            </div>
            })}
        </div>
    {/* </div> */}
  </div>
}
export default Home;