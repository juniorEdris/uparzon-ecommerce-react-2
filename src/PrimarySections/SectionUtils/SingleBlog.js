import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderDiv, Truncate } from '../Utility';
import dateformat from 'dateformat';

const SingleBlog = (props) => {
  const details = Truncate(props.blog.details, 300);
  return (
    <div className="single_blog col-12 row m-0">
      <div className="single_blog_image col-12 col-md-3">
        <img src={`https:${props.blog.photo}`} alt={props.blog.title} />
      </div>
      <div className="single_blog_details col-12 col-md-9 ">
        <div className="single_blog_title">
          <p>{props.blog.title}</p>
        </div>
        <div className="single_blog_middle">
          <div className="single_blog_date">
            <img
              src="./assets/svg/icons/calendar-alt.svg"
              alt="date-calender"
            />{' '}
            {dateformat(
              props.blog.created_at,
              'dddd, mmmm dS, yyyy, h:MM:ss TT'
            )}
          </div>
          {/* <div className="single_blog_views">
            <img src="./assets/svg/icons/ionic-eye.svg" alt="blog-views" /> 40
          </div> */}
        </div>
        {renderDiv(details)}
        <div className="blog_read_btn mt-2">
          <Link
            to={`/blog-details?blog-id=${props.blog.id}`}
            className="btn col-12 col-md-3">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);
