// With Query Strings
import { useParams,useSearchParams } from "react-router-dom"

const Product = () => {
    const {name} = useParams(); // PARAMS with destructuring
    
    // useSearchParams is a React Router hook used to read query parameters from the URL (the part after ?).
    const [searchParams] = useSearchParams(); // useSearchParams() returns an array like this:[searchParams,setSearchParams], so we need to destructure the array first.

    const price = searchParams.get("price")
    const launch = searchParams.get("launch")
  return (
    <div>
      <br/>
      <h2>Product Name: {name}</h2>
      <h2>Price for product: {price}</h2>
      <h2>Date of launch of product: {launch}</h2>
    </div>
  )
}

export default Product
