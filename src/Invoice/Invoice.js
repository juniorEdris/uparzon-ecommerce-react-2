import { connect } from 'react-redux'
import { products } from '../data'
import './invoice.css'
import InvoiceProducts from './invoiceProducts'

const Invoice = (props) => {
    return (
        <div className='invoice_wrapper'>
            <div className="container">
                <div className="invoice_header">
                    <div className="row">
                        <div className="col-4 text-left">
                            <img className='invoice_logo' src="./uparzonassets/uparzonimages/invoice/logo.png" alt="invoice logo" />
                        </div>
                        <div className="col-4 text-center">
                            <span>Customer copy</span>
                        </div>
                        <div className="col-4 text-right">
                            <p>INVOICE</p>
                            <p>#UPZ1234875ss5</p>
                            <p>26 April 1997</p>
                        </div>
                    </div>
                </div>
                <main className='invoice_main'>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="mb-5">
                                <p className='bill_head'>Bill to</p>
                                <p className='bill_name'>john doe</p>
                                <p className='bill_address'>
                                    Gmax Tech  Ltd
                                    House#30(3rd floor), Road#4, Block#B,
                                    Banani, Dhaka
                                </p>
                                <p className='bill_phone'>+031 000 1111 2222</p>
                            </div>
                            <div className="">
                                <p className='bill_head'>Delivery Address</p>
                                <p className='bill_phone'>Mobile No: 01798787444</p>
                                <p className='bill_address'>+House#30(3rd floor), Road#4, Block#B,Agrabad, Chitagong</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 text-right">
                            <div className="mb-5">
                                <p className='bill_head'>Bill from</p>
                                <p className='bill_name'>john doe</p>
                                <p className='bill_address'>
                                    Gmax Tech  Ltd
                                    House#30(3rd floor), Road#4, Block#B,
                                    Banani, Dhaka
                                </p>
                                <p className='bill_phone'>+031 000 1111 2222</p>
                            </div>
                            <div className="">
                                <p className='bill_head'>
                                    Date : 26/04/1997
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="invoice_orders">
                        <InvoiceProducts loading={ false} order={products}/>
                    </div>
                </main>
                <footer className='invoice_footer'>

                </footer>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice)
