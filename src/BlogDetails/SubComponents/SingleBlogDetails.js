import Skeleton from '@yisheng90/react-loading';
import dateFormat from 'dateformat';
import { renderDiv } from '../../PrimarySections/Utility';

const BlogDetails = (props) => {
  return (
    <div className="blog_details col-md-8" key={props.blog.id}>
      <div className="blog_details_header col-12">
        <div className="container-md-fluid">
          {props.loading ? (
            <div className="blog_title">
              <Skeleton height={50} width={`100%`} />
            </div>
          ) : (
            <div className="blog_title">
              <p>{props.blog.title}</p>
            </div>
          )}
          <div className="blog_details_info">
            <div className="row align-items-center justify-content-between no-gutters">
              {/* <div className="blog_author col-12 col-md-4">
                <span className="lnr lnr-user"></span>
                <p>
                  published by : <Link to="#">username</Link>
                </p>
              </div> */}
              {props.loading ? (
                <div className="blog_publish_time col-12 col-md-6">
                  <Skeleton height="20px" width="100%" />
                </div>
              ) : (
                <div className="blog_publish_time col-12 col-md-6">
                  <span className="lnr lnr-calendar-full"></span>
                  <span>
                    Date:{' '}
                    {dateFormat(
                      props.blog.created_at,
                      'dddd, mmmm dS, yyyy, h:MM:ss TT'
                    )}
                  </span>
                </div>
              )}
              {props.loading ? (
                <div className="blog_comment_count col-12 col-md-6">
                  <Skeleton width={`100%`} height={`20px`} />
                </div>
              ) : (
                <div className="blog_comment_count col-12 col-md-6">
                  <span className="lnr lnr-bubble"></span>
                  <span>13 comments</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="blog_details_body col-12">
        <div className="container-md-fluid">
          {props.loading ? (
            <p className="pt-3 pb-3">
              <Skeleton width={`100%`} height="400px" />
            </p>
          ) : (
            <p>{renderDiv(props.blog.details)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
