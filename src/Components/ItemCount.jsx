import { useState} from "react";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../Context/CartContext";
import '../Style.css';

const ItemCount = ({ price, id, title}) => {

    const {cartList, setCartList} = useCartContext();

    const [counter, setCounter] = useState(0);
  
    const decrease = () => {
      setCounter((counter) => Math.max(counter - 1, 0));
    };
  
    const increase = () => {
      setCounter(counter + 1);
    };
    
    // funcionalidad para agregar un producto al carrito
    const addToCart = () => {
      setCartList((currItems) => {
        const isItemFound = currItems.find((item) => item.id === id);
        if (isItemFound) {
          return currItems.map((item)=> {
            if (item.id === id){
              return {...item, quantity : item.quantity + counter };
            } else{
              return item;
            }
          });
        } else {
          return [...currItems, {id, quantity: counter, price, title}];
        }
      });
    };
  
    return (
    
      <div className="buttonsCount" >
         <button className="counterButton" onClick={decrease} key={counter}  >
           -
        </button >   
        <div>
{/*  ONCLICK PARA ACTIVAR FUNCION onADD  */}
          <Button onClick={() => addToCart()} variant="outline-warning">
              Agregar al carrito : {counter}
          </Button>
        </div>

         <button className="counterButton" key={counter >=1 } onClick={increase}>
          +
        </button> 
      </div>
      
      
    );
  };
  
  export default ItemCount;