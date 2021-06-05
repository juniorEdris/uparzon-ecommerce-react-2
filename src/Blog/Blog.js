import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import './blog.css';
import BlogList from './Components/BlogList';
import BlogSidebar from './Components/BlogSidebar';

const Blog = (props) => {
  useEffect(() => {
    toTheTop();
  }, []);
  return (
    <div className={`${props.loading ? '' : 'bg-blog'} blog_wrapper`}>
      <div className="container-md-fluid">
        <div className="row">
          <BlogList />
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.AllBlogs.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
