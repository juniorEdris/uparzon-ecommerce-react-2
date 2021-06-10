import React, { useState } from 'react';
import { connect } from 'react-redux';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';
import { renderDiv } from '../../PrimarySections/Utility';

const DetailsDescription = (props) => {
  const [section, setSection] = useState('description');
  const sections = [
    {
      name: 'description',
      path: '',
      id: 1,
    },
    {
      name: 'specification',
      path: '',
      id: 2,
    },
    {
      name: 'reviews',
      path: '',
      id: 3,
    },
  ];
  return (
    <div className="col-12 p-0 mt-5">
      <SectionHeadingOne
        sections={sections}
        section={section}
        setSection={setSection}
        LinkHide
      />
      {section === 'description' && (
        <div className="col-12 details__wrapper">
          {/* <p></p> */}
          {renderDiv(props.details?.details)}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsDescription);
