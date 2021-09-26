import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import './Scientist.css';

const Scientist = (props) => {
  const { name, age, role, salary, country, image, famousInvention, lifeSpan } =
    props.scientist;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
  const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
  return (
    <div className="scientist col-4 mb-3">
      <div className="card__container card">
        <div className="d-flex justify-content-center p-2">
          <img className="card__img" src={image} alt="scientist-img" />
        </div>
        <div className="card-body text-start ps-4">
          <h5 className="text-center fw-bold">{name}</h5>
          <h6 className="text-center fw-bold pb-3">
            <small>{lifeSpan}</small>
          </h6>
          <p className="m-0 pb-1">
            <strong>Profession:</strong> {role}
          </p>
          <p className="m-0 pb-1">
            <strong>Age:</strong> {age}
          </p>
          <p className="m-0 pb-1">
            <strong>Country:</strong> {country}
          </p>
          <p className="m-0 pb-1">
            <strong>Discovered: </strong>
            {famousInvention}
          </p>
          <p className="m-0 pb-1">
            <strong>Salary:</strong> $ {salary}
          </p>
        </div>
        <div className="text-center mb-1">
          <button
            onClick={() => props.handleAddtoCart(props.scientist)}
            href="#0"
            className="btn btn-primary"
          >
            {cartIcon} add to cart
          </button>
        </div>
        <div className="media__icon mb-3">
          <a className="icon" href="#0">
            {facebook}
          </a>
          <a className="icon" href="#0">
            {twitter}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Scientist;
