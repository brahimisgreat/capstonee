import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './products.css'

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
    {loading && <h1>LOADING...</h1>}
    {data.map((product)=>(
      <div key={product.id}className="card" style={{width: "18rem"}}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {product.description}
          </p>
          <Link className="btn btn-primary">add to cart</Link>
          <Link className="btn btn-primary">see Details</Link> 
        </div>
      </div>
    ))}
      
    </div>
  );
}
export default Products;
