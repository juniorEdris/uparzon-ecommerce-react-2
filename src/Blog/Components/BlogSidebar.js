import React from 'react';
import { connect } from 'react-redux';
import BlogCategory from './SubComponents/BlogCategories';
import LatestBlog from './SubComponents/LatestBlog';

const BlogSidebar = (props) => {
  return (
    <div className="blog_sidebar col-3 d-none d-md-block">
      <LatestBlog loading={props.loading} />
      <BlogCategory loading={props.loading} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSidebar);
