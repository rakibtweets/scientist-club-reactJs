import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scientist from '../Scientist/Scientist';
import './Main.css';

const Main = () => {
  const [scientists, setScientists] = useState([]);
  useEffect(() => {
    fetch('./scientist.JSON')
      .then((res) => res.json())
      .then((data) => setScientists(data));
  }, []);
  const [cart, setCart] = useState([]);
  const handleAddtoCart = (scientist) => {
    const newCart = [...cart, scientist];
    setCart(newCart);
  };
  return (
    <div className="main__container row g-4 mt-3 ">
      <div className="scientist__container col-8">
        <div className="row g-3 mx-3">
          {scientists.map((scientist) => (
            <Scientist
              key={scientist.id}
              scientist={scientist}
              handleAddtoCart={handleAddtoCart}
            />
          ))}
        </div>
      </div>
      <div className="cart__container col-4">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Main;
