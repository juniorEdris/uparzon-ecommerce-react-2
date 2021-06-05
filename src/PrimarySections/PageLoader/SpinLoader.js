import React from 'react';

export default function SpinLoader() {
  return (
    <div className="order_loading">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
