import { connect } from 'react-redux';

const WishlistBody = (props) => {
  const Styles = {
    minWidth: '400px',
  };
  const addProduct = async (item) => {
    const product = {
      id: item.product_id,
      photo: item.photo,
      name: item.name,
      price: item.unit_price.price,
      unit_prices_id: item.unit_price.id,
      total_quantity: item.total_quantity,
    };
    console.log('wishlist add to cart', product);
    await props.addToCart(product);
    props.user && (await props.getCartItems());
  };
  return (
    <div className="wishlist_body">
      <table class="table wishlist_table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Product name</th>
            <th scope="col">Unit price</th>
            <th scope="col">Stock status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.loading
            ? 'loading'
            : props.products?.map((product) => (
                <tr>
                  <th scope="row">
                    <div
                      className="col wish_item_delete"
                      onClick={() => props.removeProd(product)}>
                      <i className="far fa-trash-alt"></i>
                    </div>
                  </th>
                  {/* <td>
              <div className="col wish_item_delete">
                <i className="far fa-trash-alt"></i>
              </div>
            </td> */}
                  <td style={Styles}>
                    <div className="col-12">
                      <div className="row align-items-center flex-nowrap">
                        <div className="wish_item_image col-3">
                          <img
                            src={`https:${product?.photo}`}
                            alt={product?.name}
                          />
                        </div>
                        <div className="wish_item_name col-9">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="wish_item_prices">
                      <div className="row no-gutters justify-content-center flex-nowrap">
                        {product.unit_price?.previous_price !== null && (
                          <span className="mr-1">
                            <del>৳{product.unit_price?.previous_price}</del>
                          </span>
                        )}
                        <span>৳{product.unit_price?.price}</span>
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
