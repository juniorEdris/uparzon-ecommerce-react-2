import React from 'react';
import './popup.css';

export default function SpinLoader() {
  return (
    <div>
      <div className="spin_loader">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="spin_loader_backdrop"></div>
    </div>
  );
}
