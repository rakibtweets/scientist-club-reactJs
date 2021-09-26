import React from 'react';
import './Member.css';

const Member = (props) => {
  const { image, name } = props.member;
  return (
    <div className="members p-3 text-white">
      <img className="member__img" src={image} alt="" />
      <p>{name} </p>
    </div>
  );
};

export default Member;
