import { useEffect } from 'react';
import { toTheTop } from '../../PrimarySections/SectionUtils/WindowTop';
import './policypage.css'

const CookiePolicy = () => {
    useEffect(() => {
        toTheTop()
    }, [])
    return (
        <div className="cookie_policy policy_wrapper">
            <div className="container mt-3">
        <h1 className="text-center mb-3">Cookie Policy</h1>
        <p>
            The recognition of cookies isn't always a demand for visiting the website. However, we would love to point out that using the 'basket' capability at the website and ordering is most effective feasible with the activation of cookies. Cookies are tiny textual content documents which discover your pc to our server as a completely unique user while you visit sure pages at the website and they're stored through your Internet browser for your pc's difficult drive. Cookies may be used to apprehend your Internet Protocol address, saving you time while you're on, or need to enter, the website. 
        </p>

        <p>
            We most effective use cookies to your convenience in the usage of the website (as an example to recollect who you're while you need to amend your shopping cart without having to re-enter your e-mail address) and not for obtaining or the usage of another data approximately you (as an example targeted advertising). Your browser may be set to not receive cookies, but this will restrict your use of the Site. Please receive our assurance that our use of cookies does not contain any private or personal details and are free from viruses.
        </p>
        <p>
            The Help function on maximum browsers will let you know the way to save you your browser from accepting new cookies, how to have the browser notify you while you acquire a new cookie, or how to disable cookies altogether. Additionally, you may disable or delete comparable information utilized by browser add-ons, which includes Flash cookies, by changing the add-on's settings or visiting the Web site of its manufacturer.          
        </p>
        <p>
            Because cookies permit you to take benefit of some of uparzon.com's important features, we propose that you leave them turned on. For instance, in case you block or in any other case reject our cookies, you may not be capable of upload gadgets to your Shopping Cart, proceed to Checkout, or use any uparzon.com.bd services and products that require you to Sign in.    
        </p>
            </div>
        </div>
     );
}
 
export default CookiePolicy;