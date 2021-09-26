import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Member from '../Member/Member';

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const scientist of cart) {
    total += scientist.salary;
  }
  const memberIcon = <FontAwesomeIcon icon={faUser} />;

  return (
    <div className="cart text-center ">
      <h4 className="fw-bold">
        {memberIcon} Member added: {cart.length}
      </h4>
      <h6 className="fw-bold">Total price: $ {total}</h6>
      <div className="members__container mt-3">
        {cart.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
