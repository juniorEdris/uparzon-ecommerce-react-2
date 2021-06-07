import React from 'react';
import { Link } from 'react-router-dom';

function SectionHeadingOne(props) {
  return (
    <div
      className={
        'sectionHeaderOne d-flex  justify-content-between chilldren-gap-bottom'
      }>
      <ul className=" text-capitalize d-flex align-items-center justify-content-md-center flex-grow-1">
        {props.sections.map((section) => (
          <li>
            <Link
              to="#"
              className={props.section === section.name && 'active'}
              onClick={(e) => {
                e.preventDefault();
                props.setSection(section.name);
              }}>
              {section.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={props.morePath} className="text-capitalize all-products-btn">
        all categories
      </Link>
    </div>
  );
}

export default SectionHeadingOne;
