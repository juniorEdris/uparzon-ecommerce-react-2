import { useEffect } from 'react';
import './policypage.css'
import {toTheTop} from '../../PrimarySections/SectionUtils/WindowTop';

const PurchasingPolicy = () => {
    useEffect(() => {
        toTheTop()
    }, [])
    return (
        <div className="purchasing_policy policy_wrapper">
            <div className="container mt-3">
        <h1 className="text-center mb-3">Purchasing Policy</h1>
        <p>
        Uparzon is an online platform where sellers and buyers would be able to directly connect with another. Uparzon promotes dealers in its systems and customers are capable of being in direct contact with those dealers. Uparzon does not manufacture nor does it take responsibility for any product sold on its platform. All the goods sold in the Uparzon platform are sold by the sellers of Uparzon and responsibility is taken by the sellers as per their agreements with Uparzon.
        </p>
        
                <p>
                Unless it is stated in the product information that a certain product has guarantee for it, Uparzon does not provide any guarantees for products.
                </p>

                <p>
                Customers are provided records regarding the dealers and are liable for checking the originality of the stated products. Being an online platform for sellers, as a virtual shopping mall, Uparzon does not store any products and cannot check the originality of the products and cannot guarantee it unless it is from their strategic partners. Buyers are suggested to immediately talk over with the seller to be confident of the high-satisfactory and originality of the products.
            </p>

                <p>
                Uparzon will ensure the return of products within 3 days from the customer’s end if the customer faces the aforementioned difficulties. Uparzon always looks out for the best interest of its users.
                </p>
                <p>
                Uparzon is an online marketplace with thousands of registered sellers and operates as a virtual and futuristic shopping mall.
                </p>
                <p>
                Sellers are advised to mention their stores if any product is a duplicate/reproduction. Failure to achieve this will result in penalization for that particular store and the seller will be held answerable for any proceedings concerning duplicate products through the customer. It could range from financial penalization to the dismissal of the store from Uparzon’s platform.
                </p>
      </div>
        </div>
     );
    }
 
export default PurchasingPolicy;