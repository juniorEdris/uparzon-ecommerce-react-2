import React from 'react';
import { connect } from 'react-redux';

const SearchBanner = (props) => {
  return (
    <div className="search_banner mb-5">
      <div className="single_banner">
        <img
          src={`./assets/images/banners/search_banner.png`}
          alt={`search bannner`}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBanner);
