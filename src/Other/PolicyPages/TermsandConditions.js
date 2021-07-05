import { useEffect } from 'react';
import './policypage.css'
import {toTheTop} from '../../PrimarySections/SectionUtils/WindowTop';
const TermsandConditions = () => {
    useEffect(() => {
        toTheTop()
    }, [])
    return (
        <div className="terms_condition_policy policy_wrapper">
            <div className="container mt-3">
        <h3 className="text-center mb-1">Terms &#38; Conditions</h3>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid alias, voluptate optio, pariatur quos nihil magni aut laborum odio quibusdam unde corrupti. Quae quia mollitia quibusdam nobis, nisi odio reprehenderit maiores dolore exercitationem quam harum optio ullam aut nihil modi qui excepturi quod nam numquam dolorum iure hic facere! Perspiciatis porro recusandae praesentium unde quam! Magnam tenetur dolorem numquam perferendis repudiandae ullam vero voluptates sed impedit cumque, eum, eaque architecto dolores voluptate, cum dolorum aliquam minima. Reiciendis, aut! Nisi eum voluptas eveniet veritatis provident facere quasi amet, a sed repudiandae delectus quam doloremque nam vitae consequatur assumenda sunt reprehenderit.  
        </p>
                
      </div>
        </div>
     );
}
 
export default TermsandConditions;