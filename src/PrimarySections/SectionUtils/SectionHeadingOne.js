import React from 'react';

function SectionHeadingOne(props) {
  return (
    <div>
      {props.reverse ? (
        <h1 className="section_heading_one">
          <span>{props.fontStyleOne}</span> {props.fontStyleTwo}
        </h1>
      ) : (
        <h1 className="section_heading_one">
          {props.fontStyleOne} <span>{props.fontStyleTwo}</span>
        </h1>
      )}
    </div>
  );
}

export default SectionHeadingOne;
