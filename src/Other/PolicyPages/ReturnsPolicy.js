import { useEffect } from 'react';
import './policypage.css'
import {toTheTop} from '../../PrimarySections/SectionUtils/WindowTop';

const ReturnsPolicy = () => {
    useEffect(() => {
        toTheTop()
    }, [])
    return (
        <div className="return_policy policy_wrapper">
            <div className="container mt-3">
        <h1 className="text-center mb-3">Returns Policy</h1>
        <div className="">
               <strong>Returning Issue:</strong>
            <p>
                <ol className='uparzon_order_list'>
                            <li>
                                If your item is faulty/harmed or mistaken/bad on the hour of conveyance, if you do not mind, please get in touch with us withinside the pertinent go back window. Your item is probably certified for discount or substitution depending upon the item elegance and condition.
                            </li>
                            <li>
                                Please be aware that some gadgets aren't certified for arrival if the item is "Never once more required"
                            </li>
                            <li>
                                For gadget related troubles after use or the lapse of the appearance window, we can allude you to the brand assure focus (if relevant).

                            </li>
                            <li>
                                Please be aware which you must keep and be capable of provide proper documentation and evidence about your return/refund claim (i.e. unboxing video, receiving invoice, etc).                      
                                
                            </li>
               </ol>
            </p>
            
                </div>
                <div className="">
                    <strong>Cancellation Issue:</strong>
                    <p>
                    Uparzon keeps unqualified right to cancel any order at its sole discretion prior to dispatch and for any purpose which may also include, but not restricted to, the product being mispriced, out of stock, expired, defective, malfunctioned, and containing wrong information or description arising out of technical or typographical mistakes or for another purpose.

                    </p>
                </div>
                <div className="">
                    <strong>Refund Issue:</strong> <br />
                    <p>
                    In case of any cancellations of any order(s) because of inevitable occasions the paid amount could be refunded because the customers' uparzon account firstly. Customer want to report an issue as refund category and ought to point out his/her favored refund type(i.e. bkash/bank) together with details (bkash personal number, bank account details)
                    </p>
                    <p>
                    If an order was given canceled, then the purchaser gets refunded with his/her main amount (paid amount) and could be disqualified for any type of offers or cashback related to the particular order.
                    </p>
                    <p>
                    The refund system may also absorb to 30 working days or extra depending upon the payment service gateway provider’s clauses. The refund may be initiated in the same payment channel i.e. if the purchaser can pay through bKash then the purchaser can be refunded via bKash. The purchaser can't be refunded through another payment channels. But Uparzon keeps the right and has the right to consider/rethink refund through any other flexible channel(s) to make the refund gadget faster or to make it simpler for the customer.
                    </p>
                    <p>
                    The purchaser will not be eligible for any extra cashback/bonus towards his main amount in case of refunds. Uparzon isn't certain to pay any type of service fee or charge for the refunded amount.
                    </p>
                </div>
      </div>
        </div>
     );
}
 
export default ReturnsPolicy;