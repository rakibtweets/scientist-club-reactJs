import React, { useEffect, useState } from 'react';
import Scientist from '../Scientist/Scientist';
import './Main.css';

const Main = () => {
  const [scientists, setScientists] = useState([]);
  useEffect(() => {
    fetch('./scientist.JSON')
      .then((res) => res.json())
      .then((data) => setScientists(data));
  }, []);
  return (
    <div className="main__container row g-4 mt-3 ">
      <div className="scientist__container col-8">
        <div className="row g-5">
          {scientists.map((scientist) => (
            <Scientist key={scientist.id} scientist={scientist} />
          ))}
        </div>
      </div>
      <div className="cart__container col-4">
        <h3>cart goest here</h3>
      </div>
    </div>
  );
};

export default Main;
