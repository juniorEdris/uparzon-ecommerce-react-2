import { connect } from 'react-redux'
import { Truncate } from '../PrimarySections/Utility';

const InvoiceProducts = (props) => {
    let subTotal = () => {
        let allProd = [];
        props.order?.cart?.forEach((x) => {
          allProd.push(x.price * x.qty);
        });
        return allProd.reduce((a, b) => parseInt(a) + parseInt(b), 0);
      };
    return (
        <div className='mb-3'>
            <div className="invoice_product_table">
      <table className="table">
        <thead className="thead-primary">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Item & Description</th>
            <th scope="col">Rate</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        
          <tbody>
            {props.order?.cart?.map((item) => (
              <tr className="trow-light" key={item.product_id}>
                <td>
                  id
                  </td>
                <td>
                  <div className="row" style={{width:'300px'}}>
                    <div className="col-3">
                      <img src={`https:${item.photo}`} alt={item.name}/>    
                    </div>
                    <div className="col-9">
                      {Truncate(item.name, 15) }   
                    </div>
                  </div>
                  </td>
                <td>BDT {item.price}</td>
                <td>{item.qty}</td>
                <td>
                  BDT{' '}
                  {
                    (Number(item.price) * Number(item.qty)).toFixed(
                    2
                    )
                  }
                </td>
              </tr>
            ))}
          </tbody>
      </table>
        </div>
        <div className={'pb-5'}>
                <div className="invoice_total text-right row no-gutter">
                    <div className="col-md-4 col-12"></div>
                    <div className="col-md-4 col-12"></div>
                    <div className="invoice_total_child col-md-4 col-12">
                        <div className="invoice_total_child_body pl-2 pr-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <span>Sub total</span>
                                <span>BDT {Number(subTotal()).toFixed(2)}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <span>Discount</span>
                                <span>(-)BDT {Number(props.order?.discount).toFixed(2)}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <span>Shipping</span>
                                <span>(+)BDT {Number(props.order?.shipping_cost).toFixed(2)}</span>
                            </div>
                            <div className="invoice_total_border d-flex align-items-center justify-content-between">
                                <span>Total</span>
                                <span>BDT {Number(props.order?.pay_amount).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signature_section text-center">
                    <span className=''>"This is computer Generated Invoice. Please Signature it"</span>
                </div>
              </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceProducts)
