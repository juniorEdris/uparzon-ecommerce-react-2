import React from 'react';
import { connect } from 'react-redux';
import Article from '../../../PrimarySections/SectionUtils/Article';

const ArticleBody = (props) => {
  return (
    <div className="health_article_body row">
      {props.blogs?.length > 0 &&
        props.blogs?.map((post) => (
          <div className="col-6 col-md-4 col-xl-3" key={post.id}>
            <Article key={post.id} post={post} />
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  blogs: state.HomeContent.homeBlogs,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBody);
