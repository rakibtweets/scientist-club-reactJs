import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Scientist.css';

const Scientist = (props) => {
  const { name, age, role, salary, country, image, famousInvention } =
    props.scientist;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="scientist col-4">
      <div className="card__container card">
        <div className="d-flex justify-content-center p-2">
          <img className="card__img" src={image} alt="scientist-img" />
        </div>
        <div className="card-body text-start p-3">
          <h5 className="text-center fw-bold">
            <small>{name}</small>
          </h5>
          <p className="m-0 pb-1">Profession: {role}</p>
          <p className="m-0 pb-1">age: {age}</p>
          <p className="m-0 pb-1">Country: {country}</p>
          <p className="m-0 pb-1">Discovered: {famousInvention}</p>
          <p className="m-0 pb-1">Salary: $ {salary}</p>
        </div>
        <div className="text-center pb-4">
          <button
            onClick={() => props.handleAddtoCart(props.scientist)}
            href="#0"
            className="btn btn-primary mb-auto"
          >
            {cartIcon} add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scientist;
