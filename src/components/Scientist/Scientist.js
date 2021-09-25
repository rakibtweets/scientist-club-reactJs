import React from 'react';
import './Scientist.css';

const Scientist = (props) => {
  const { name, age, role, salary, country, image, famousInvention } =
    props.scientist;
  return (
    <div className="scientist col-4">
      <div className="card__container card">
        <div className="d-flex justify-content-center p-2">
          <img className="card__img" src={image} alt="scientist-img" />
        </div>
        <div className="card-body text-center p-3">
          <h5 className="text-center fw-bold">
            <small>{name}</small>
          </h5>
          <p className="m-0">Profession: {role}</p>
          <p className="m-0">age: {age}</p>
          <p className="m-0">Country: {country}</p>
          <p className="m-0">Discovered: {famousInvention}</p>
          <p className="m-0">Salary: $ {salary}</p>
          <div className="">
            <button
              onClick={() => props.handleAddtoCart(props.scientist)}
              href="#0"
              className="btn btn-success mb-auto"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scientist;
