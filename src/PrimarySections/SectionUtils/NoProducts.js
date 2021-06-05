import React from 'react';
import './popup.css';

export default function NoProducts() {
  return (
    <div>
      <div className="no_products row justify-content-center align-items-center ">
        <div className="">
          <img
            src="./assets/svg/icons/empty_box.svg"
            alt="empty box"
            height={150}
            width={150}
          />
          <h3 className="text-capitalize text-center mb-2 mt-2">no products</h3>
        </div>
      </div>
    </div>
  );
}
