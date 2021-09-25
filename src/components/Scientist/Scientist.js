import React from 'react';
import './Scientist.css';

const Scientist = (props) => {
  const { name, age, role, salary, country, image, famousInvention } =
    props.scientist;
  return (
    <div className="scientist col-4">
      <div className="card">
        <img className="card__img" src={image} alt="scientist-img" />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Profession: {role}</p>
          <p className="card-text">age: {age}</p>
          <p className="card-text">Country: {country}</p>
          <p className="card-text">Famous Invention: {famousInvention}</p>
          <p className="card-text">Salary: {salary}</p>
          <button href="#0" className="btn btn-primary">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scientist;
