import React from 'react';

function SectionHeadingThree(props) {
  return (
    <div>
      <h1 className="section_heading_three">
        <span>{props.textOne}</span> {props.textTwo}
      </h1>
    </div>
  );
}

export default SectionHeadingThree;
