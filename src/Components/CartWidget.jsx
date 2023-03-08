import { useCartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import '../Style.css';

const Carwidget = () => {

  const {cartList} = useCartContext();
  

  const quantity = cartList.reduce((acc,curr) => {
    return acc + curr.quantity;
  }, 0)
 
  return (
    <>
      <div className="cartW">
        <Button variant="warning">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="numberShop">{quantity}</span>
        </Button>
      </div>
    </>
  );
};

export default Carwidget;
