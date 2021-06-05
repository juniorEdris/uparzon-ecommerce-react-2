import React from 'react';
import { connect } from 'react-redux';

const PreviewSection = (props) => {
  return (
    <div className="preview_section col col-md-4">
      <div className="heading">
        <p className="preview_footer_heading">what is valid prescription?</p>
      </div>
      <div className="preview_instruction">
        <img
          src={`./assets/svg/icons/prescription.svg`}
          className="mb-2"
          alt="prescription-instruction"
        />
      </div>
      <div className="preview_footer">
        <p className="preview_footer_heading">Order Medicine in 3 steps</p>
        <div className="preview_footer_btns">
          <div className="steps">
            <div className="steps_count">1</div>
            <p>Upload a valid prescription</p>
          </div>
          <div className="steps">
            <div className="steps_count">2</div>
            <p>Recieve a confirmation call</p>
          </div>
          <div className="steps">
            <div className="steps_count">3</div>
            <p>Delivery at your door step</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewSection);
