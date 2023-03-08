import "../Style.css";
import React, { useEffect, useState } from "react";
import ItemCount from "../Components/ItemCount";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useCartContext } from "../Context/CartContext";

export const ItemDetail = ({ products }) => {
  const { id } = useParams();
  // const {addProduct} = useCartContext();
  const [product, setProduct] = useState([]);

  // const onAdd = (quantity) => {
  //   addProduct(products, quantity)

  // };

  useEffect(() => {
    const db = getFirestore();
    const ProdRef = doc(db, "data", `${id}`);

    getDoc(ProdRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      } else {
        console.log("No documents!");
      }
    });
  }, []);

  const prodFilter = products.filter((data) => data.id == id);

  return (
    <>
      {prodFilter.map((data) => (
        <div key={data.id}>
          <div className="ContenedorCard">
            <div className="card">
              <div className="card-img">
                <img src={data.img} alt={data.title} />
              </div>
              <div className="cardDetail">
                <h2>{data.title}</h2>
                <p>Precio: $ {data.price}</p>
                <span>Detalle : {data.description}</span>
                <span className="textDetail">Stock: {data.stock}</span>
                <span className="textDetail">Categoria: {data.category}</span>
                <div className="ItemCount">
                  <ItemCount
                    stock={data.stock}
                    id={data.id}
                    price={data.price}
                    title={data.title}
                  />
                  <Button variant="outline-warning">
                    <Link className="link" to={"/Cart"}>Ver mi carrito</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default ItemDetail;
