import { connect } from 'react-redux';

const WishlistHeader = (props) => {
  return (
    <div className="wishlist_header">
      <div className="wishlist_page_icon">
        <img
          src="./assets/svg/icons/wishlist-header-icon.svg"
          alt="wishlist page header icon"
        />
      </div>
      <h1 className="wishlist_header">my wishlist</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistHeader);
