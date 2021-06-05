import React from 'react';
import { connect } from 'react-redux';

const Map = (props) => {
  return (
    <div>
      <div className="map_wrapper mt-2 mt-md-4 mb-3 col-12">
        <img src="./assets/images/map_banner.png" alt="wrapper" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
