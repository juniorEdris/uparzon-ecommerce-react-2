import React from 'react';
import { connect } from 'react-redux';

export const NameInput = (props) => {
  return (
    <div className="name_nput_wrapper mt-5">
      <div className="form-group col col-md-6 offset-md-3">
        <div className="prescription_name_label text-center mb-2">
          <label htmlFor="exampleFormControlInput1">Write your name</label>
        </div>
        <input
          type="text"
          className="form-control prescription_name"
          id="exampleFormControlInput1"
          name="name"
          onChange={props.inputChange}
          placeholder="Enter the name"
          value={props.input.name}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NameInput);
