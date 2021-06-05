import React from 'react';
import { Link } from 'react-router-dom';
import { Truncate } from '../Utility';

function Article(props) {
  const details = props.post.details.substring(0, 500);
  return (
    <div className="article box-shadow mb-3" key={props.post.id}>
      <div className="article_image">
        <img src={`https:${props.post.photo}`} alt="" />
      </div>
      <div className="article_post_body">
        <div className="article_title">
          <h4>{Truncate(props.post.title, 40)}</h4>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: details,
          }}
          style={{
            minHeight: '10rem',
            overflow: 'hidden',
            maxHeight: '10rem',
          }}></div>
        <Link to={`/single-blog?blog-id=${props.post.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default Article;
