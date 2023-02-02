import { useEffect, useRef, useState } from "react"

function App() {
const [count, setCount] = useState(0)

const [product, setProduct] = useState([]); 


let isIgnored = false;
const  inputRef = useRef(null)

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
              .then(res => res.json())
              
              .then(json => setProduct(json))
           
            
           
  

  //  //Cleanup function helps to make useeffect run only once 
  //  if(!isIgnored) getProduct();
  //  return () => {
  //    isIgnored = true
     
  //  }
  
}, [])

localStorage.setItem("key", "value")

useEffect(() => {
  localStorage.setItem('count', (count));
}, [count]);



// useEffect(() => {
//   const items = JSON.parse(localStorage.setItem('count'));
//   if (count) {
//    setItems(count);
//   }
// }, []);






// useEffect(() => {
//   const Run = (
    
//   ) => {
  
//     let users = ['sam', 'esty', 'jj']
//   for (const item of users) {
//     console.log(item)
//     getProduct()
//   }
//   }
//   //Cleanup function helps to make useeffect run only once 
//   if(!isIgnored) Run();
//   return () => {
//     isIgnored = true
//   }
  
//   //Using the square bracket means the useEffect won't run when a state changes
//   // Optionally you can set the state you want to rerender by addingg it to the useEffect dependency which
//   //is the square bracket
//   }, []);
  
const getValue = () => {
//  console.log(inputRef.current.value); Use to log value

inputRef.current.click()
}


  return (

    <div className="App">
      
      <h1>Cart {count}</h1>

     <button >Increase</button>
     <input type="file" hidden ref={inputRef} />

     <button onClick={getValue}>Submit</button>




<div classname="container py-5">
    <div classname="row">

    <ul className="list-unstyled col-md-12 col-lg-4 mb-4 mb-lg-0" >
  {product.map(product => (
    

    
        <li key={product.id} className="card-body" >

      <img src={product.image} className=""  alt={product.title} style={{height:'80px'}}/>
      <h3 className="card-title">{product.title}</h3>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Add to cart</button>
      
    </li>
  ))}
</ul>
        
    </div>

</div>














    </div>

    
  )
}

export default App
