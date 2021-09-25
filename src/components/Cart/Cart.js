import React from 'react';
import Member from '../Member/Member';

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const scientist of cart) {
    total += scientist.salary;
  }

  return (
    <div className="cart text-center ">
      <h4 className="fw-bold">Member added: {cart.length} </h4>
      <h6 className="fw-bold">Total price: $ {total}</h6>
      <div className="members__container">
        {cart.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
