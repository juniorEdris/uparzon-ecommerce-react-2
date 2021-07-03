import { connect } from 'react-redux';

const WishlistHeader = (props) => {
  return (
    <div className="wishlist_header">
      <h1 className="wishlist_header">my wishlist</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistHeader);
