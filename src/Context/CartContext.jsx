 import { useState, createContext, useContext } from "react";

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);


export const  CartContextProvider = ({children}) => {

const [cartList, setCartList] = useState([]);


  // Funcionalidad para remover Item del carrito
  const deleteItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  // Funcionalidad para dejar el carrito vacio al finalizar compra
  const removeList = () => setCartList([]);


  // Funcionalidad para totalizar la compra
  const totalPrice = () => {
    return cartList.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

      // Funcionalidad para total de cantidades
      const totalProduts = () => cartList.reduce(
        (acc, prodAct) => acc + prodAct.quantity, 0);



  return (
    <CartContext.Provider value = {{
      cartList,
      setCartList, 
      deleteItem,
      removeList,
      totalPrice,
      totalProduts,
      }}>

        {children}
    </CartContext.Provider>
  );
};

