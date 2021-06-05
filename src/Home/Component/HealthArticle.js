import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingThree from '../../PrimarySections/SectionUtils/SectionHeadingThree';
import Body from './SubComponent/ArticleBody';

const HealthArticle = (props) => {
  return (
    <div className="health_article mb-4">
      {props.loading ? (
        <div className="container-md-fluid">
          <Skeleton width={'100%'} height="60px" className="mb-3" />
          <div className="row">
            {Array(4)
              .fill()
              .map((post, i) => (
                <div className="col-12 col-md-3" key={i}>
                  <Skeleton width={'100%'} height={200} />
                  <Skeleton width={'100%'} height={130} />
                </div>
              ))}
          </div>
        </div>
      ) : (
        props.blogs.length > 0 && (
          <div className="container-md-fluid">
            <SectionHeadingThree textOne={'Health'} textTwo={'Article'} />
            <Body />
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  blogs: state.HomeContent.homeBlogs,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HealthArticle);
