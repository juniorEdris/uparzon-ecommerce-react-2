import dateFormat from 'dateformat'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { products } from '../data'
import { useQuery } from '../PrimarySections/Utility'
import { getSingleOrderDetails } from '../Redux/Action/SingleOrderAction'
import './invoice.css'
import InvoiceProducts from './invoiceProducts'

const Invoice = (props) => {
    const query = useQuery();
    const id = query.get('id');
  const history = useHistory();

  useEffect(() => {
    props.getSingleOrder(id);
  }, [props.id]);
  const printPage = (e) => {
    window.print();
};
const goBack = e => {
    history.goBack()
}

    return (
        <div className='invoice_wrapper pt-3'>
            <div className="container">
            {
            props.loading ? 
            <div className="full_vh d-flex align-items-center justify-content-center">
            <strong style={{fontSize:'1.2rem'}}> Invioice generating...</strong>
        </div>
         :
            <div className="">
            <div className="print-btn-container d-flex align-items-center justify-content-between mb-4">
            <button
            type="button"
            className="btn btn-primary print-btn d-none d-md-block"
            onClick={goBack}>
            <i className="fas fa-arrow-circle-left"></i> Back
          </button>
            <button
            type="button"
            className="btn btn-primary print-btn d-none d-md-block"
            onClick={printPage}>
            <i className="fas fa-print"></i> Print
          </button>
            </div>

                <div className="invoice_header">
                    <div className="row">
                        <div className="col-4 text-left">
                            <img className='invoice_logo' src="./uparzonassets/uparzonimages/invoice/logo.png" alt="invoice logo" />
                        </div>
                        <div className="col-4 text-center">
                            <span>Customer copy</span>
                        </div>
                        <div className="col-4 text-right">
                            <p><strong>INVOICE</strong></p>
                            <p>#{props?.singleorder?.order_number}</p>
                            <p>{dateFormat(
                                props?.singleorder?.date,
                                ' mmmm dS, yyyy, h:MM:ss TT'
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                <main className='invoice_main'>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="mb-5">
                                <p className='bill_head'><strong>Bill to</strong></p>
                                <p className='bill_name'>{props.singleorder?.shipping_name}</p>
                                <p className='bill_address'>
                                    {props.singleorder?.shipping_address || 'none'}
                                </p>
                                <p className='bill_phone'>{props.singleorder?.shipping_phone || 'none'}</p>
                            </div>
                            <div className="">
                                <p className='bill_head'><strong>Delivery Address</strong></p>
                                <p className='bill_phone'>Mobile No: {props.singleorder?.shipping_phone || 'none'}</p>
                                <p className='bill_address'>{props.singleorder?.shipping_address || 'none'}</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 text-right">
                            <div className="mb-5">
                                <p className='bill_head'><strong>Bill from</strong></p>
                                <p className='bill_name'>{props.singleorder?.shipping_name}</p>
                                <p className='bill_address'>
                                    {props.singleorder?.shipping_address || 'none'}
                                </p>
                                <p className='bill_phone'>{props.singleorder?.shipping_phone || 'none'}</p>
                            </div>
                            <div className="">
                                <p className='bill_head'>
                                    Date : {dateFormat(
                                            props?.singleorder?.date,
                                            ' mmmm dS, yyyy'
                                            )}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="invoice_orders">
                        <InvoiceProducts loading={ false} order={props.singleorder}/>
                    </div>
                </main>
                </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.SingleOrder.loading,
    singleorder: state.SingleOrder.orderDetails,
    });

    const mapDispatchToProps = (dispatch) => ({
    getSingleOrder: (data) => dispatch(getSingleOrderDetails(data)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(Invoice)
