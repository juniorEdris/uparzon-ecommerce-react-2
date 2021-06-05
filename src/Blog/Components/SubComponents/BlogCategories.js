import Skeleton from '@yisheng90/react-loading';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogCategory = (props) => {
  return (
    <div className="blog_category">
      <div className="blog_list_heading">
        <h3>{'blog categories'}</h3>
      </div>
      {props.loading ? (
        <div className="blog_category_details">
          <Skeleton width="100%" height="20px" />
        </div>
      ) : (
        <div className="blog_category_details">
          <Link to="#">
            <span className="lnr lnr-chevron-right" /> Health Tips
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogCategory);
