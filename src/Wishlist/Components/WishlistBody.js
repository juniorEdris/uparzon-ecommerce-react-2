import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const WishlistBody = (props) => {
  const Styles = {
    minWidth: '400px',
  };
  const addProduct = async (details) => {
    const data = {
      product_id: details.product_id || '',
      slug: props.product?.slug || '',
      photo: details?.photo,
      shop_name: details?.shop_name || '',
      name: details?.name,
      unit_price: details?.unit_price,
      shop_id: details?.shop_id,
      vendor_delivery: details?.vendor_delivery,
      is_campaign: details.is_campaign,
    };
     console.log(data);
    // await props.addToCart(data);
    // props.user && (await props.getCartItems());
  };
  return (
    <div className="wishlist_body">
      <table class="table wishlist_table">
        <thead>
          <tr>
            <th scope="col">Product name</th>
            <th scope="col">Unit price</th>
            <th scope="col">Stock status</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.loading
            ? 'loading'
            : props.products?.map((product) => (
              <tr key={ product.product_id}>
                  <td style={Styles}>
                    <div className="col-12">
                    <div className="row align-items-center flex-nowrap">

                        <div className="wish_item_image col-3">
                      <Link to={`/productdetails?id=${product.product_id}`}>
                          <img
                            src={`https:${product?.photo}`}
                            alt={product?.name}
                            />
                            </Link>
                        </div>
                      <div className="wish_item_name col-9">
                        <Link to={`/productdetails?id=${product.product_id}`}>
                          {product.name}
                      </Link>
                        
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="wish_item_prices">
                      <div className="row no-gutters justify-content-center flex-nowrap">
                        {product.unit_price?.previous_price !== null && (
                          <span className="mr-1">
                            <del>৳{product.unit_price?.previous_price || 0}</del>
                          </span>
                        )}
                        <span>৳{product.unit_price}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="col-12 text-success">in stock</div>
                  </td>
                  <td>
                    <button
                      className="btn btn-addcart text-light col-12"
                      onClick={() => addProduct(product)}>
                      <i className="fas fa-cart-plus mr-2"></i>
                      <span className="d-none d-md-inline"> add to cart</span>
                    </button>
                </td>
                <td>
                    <div
                      className="col wish_item_delete"
                      onClick={() => props.removeProd(product)}>
                      <i className="far fa-trash-alt"></i>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistBody);
