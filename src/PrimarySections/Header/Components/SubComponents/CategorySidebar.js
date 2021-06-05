import Skeleton from '@yisheng90/react-loading';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CategorySidebar = (props) => {
  const CloseBar = () => {
    props.setCategoryBar(!props.categoryBar);
    props.setCategoryID('');
  };
  return (
    <div className="sidebar category_sidebar d-none d-md-block">
      <div
        className={`sidebar_route category_sidebar_list ${
          !props.categoryBar && 'd-none'
        }`}>
        <div className="cross">
          <span class="lnr lnr-cross" onClick={CloseBar}></span>
        </div>
        <ul className="sidebar_route_list">
          {props.loading
            ? Array(12)
                .fill()
                .map((x) => (
                  <li>
                    <Skeleton width={'100%'} height={27} />
                  </li>
                ))
            : props.categories?.map((cat) => (
                <li
                  className={`${
                    props.categoryID.toString() === cat.id.toString() &&
                    'category_sidebar_list_active'
                  }`}>
                  <Link
                    to={`/category-products?id=${cat.id}`}
                    key={cat.id}
                    onClick={() => {
                      props.setCategoryBar(!props.categoryBar);
                      props.setCategoryName(cat.name.en);
                      props.setCategoryID(cat.id);
                    }}>
                    {cat.name.en}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
      {props.categoryBar && (
        <div
          className="responsive_backdrop category_sidebar"
          onClick={() => {
            props.setCategoryBar(false);
          }}></div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  categories: state.HomeContent.categories,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CategorySidebar);
