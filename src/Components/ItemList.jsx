import Item from "./Item";
import React from "react";
import '../Style.css'

const ItemList = ({ products }) => {
  return (
    <div className="conteinerItemList">
      {products.map((dato) => (
        <Item
          key={dato.id}
          id={dato.id}
          img= {dato.img}
          title={dato.title}
          description={dato.description}
          price={dato.price}
          category={dato.category}
        />
      ))}
    </div>
  );
};

export default React.memo (ItemList);
