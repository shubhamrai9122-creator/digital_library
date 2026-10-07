import { useEffect, useState } from 'react'
import ProductList from './ProductList';
import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://digital-library-1jeh.onrender.com";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function APIcall() {
      console.log("aman happy birthday..🎂");
      try {
        let responce = await fetch(`${API_BASE_URL}/api/products`);
        let data = await responce.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    APIcall();
  }, []);
  return (
    <div>

       <h1>Lorem ipsum dolor sit. {count}</h1>
       <h1>Lorem ipsum dolor sit. {num}</h1>
       <button onClick={()=>setCount(count+1)}>click count</button>
       <button onClick={()=>setNum(num+1)}>click num</button>
       <ProductList products={products}/>

    </div>
  )
}

export default App