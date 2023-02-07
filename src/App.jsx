import { useEffect, useRef, useState } from "react"
import ProductCard from "./ProductCard";

function App() {


  const [products, setProducts] = useState([]);



  useEffect(() => {
    const controller = new AbortController()

    const FetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {signal: controller.signal})
        const data = await response.json()
        setProducts(data)
        
      }
      catch (error) {
        console.log(error)
      }
    }

    FetchData()

    return () => {
      controller.abort()
    }
   


  }, [])

console.log(products);

  return (

    <div className="App">
<h1>Esther</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
       
{products.map((product, index) => {

<ProductCard key={index} 
image={product.image} 
price={product.price}
 rating={product.rating.rate}
 description={product.description} />

})}


        </div>




        </div>
     













  


  )
}

export default App
