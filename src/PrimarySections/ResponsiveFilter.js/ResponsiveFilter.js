import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './responsivefilter.css';

const ResponsiveFilter = (props) => {
  // useEffect(() => {
  //   document.body.style.overflow = props.filter ? 'hidden' : '';
  // }, [props.filter]);
  return (
    <div className="responsive_filter bg-light col-12 d-md-none">
      <div className="col-12 p-0">
        <select
          name=""
          id=""
          className="responsive_select"
          onChange={(e) => props.setOption(e.target.value)}
          value={props.option}>
          <option value="">All</option>
          {props.categories?.map((cat) => (
            <option value={cat.id} key={cat.id}>
              {cat.name.en}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.HomeContent.categories,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveFilter);
