import React from 'react';

export default function NewsLetter() {
  return (
    <div className={`news_letter_wrapper `}>
      <div className="container-md-fluid">
        <div className="row align-items-center no-gutters pt-2 pb-2">
          <div
            className={`news_letter_left col-md-4 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0`}>
            <img
              src={'./uparzonassets/svg/icons/paper-plane.svg'}
              className="mr-3"
              alt="news letter"
            />
            <h3 className="text-light p-0 m-0">Sign Up For News Letters</h3>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center mb-3 mb-md-0">
            <p className="text-light mb-0">
              Be the First to Know. Sign up for newsletter today
            </p>
          </div>
          <div className="col-md-5 mb-3 mb-md-0">
            <div
              className={`news_letter_form row no-gutters align-items-center m-auto col-11`}>
              <div className={`news_letter_input col-8`}>
                <input type="text" name="" placeholder="" />
              </div>
              <div className={`news_letter_button col-4`}>
                <button type="button" className="">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
