import { useEffect } from 'react';
import { toTheTop } from '../../PrimarySections/SectionUtils/WindowTop';

const FAQ = () => {
    useEffect(() => {
      toTheTop()
      
    }, [])
    return (
        <div className="faq_wrapper policy_wrapper">
            
<div className=" container">
        <h3 className="text-center mb-3">FAQ's</h3>
<div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-faq btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            PRODUCT INFORMATION
        </button>
      </h2>
    </div>
    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
            
            <strong>Where can I find more precise records about a product?</strong>
            <p>
            Information concerning your product is defined while you click on the particular product and it'll redirect you into the product web page in which you may find the entire information of your preferred product.
            </p>
            
            <strong>How can I locate the right product on Uparzon?</strong>
            <p>
            You can begin with the aid of using clicking on a category name at the left side of the website. This indicates all the goods we've inside that category. There is any other way too. If you understand what you're looking for, simply type the name of the product or brand in our search bar on the top of the web page and click on the "Search" icon.
            </p>
                                
            <strong>Are all products/items on Uparzon new and unused?</strong>
            <p>
            Yes, Uparzon handiest offers 100% new and unused products. The handiest exception is for refurbished laptops for which we make certain the quality high-satisfactory grade and complete assurance from the vendor.
            </p>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-faq btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            PRODUCT PRICE
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
            <strong>Are there any hidden fees or expenses if I order from Uparzon?</strong>
            <p>
            There aren't any hidden fees or expenses while you order from Uparzon. All fees are 100% seen at the quit of the checkout process.
            </p>
            
            <strong>Are the fees on Uparzon negotiable?</strong>
            <p>
            Prices on Uparzon aren't negotiable. Uparzon has hundreds of dealers and that they provide you the satisfactory fees and deals.
            </p>
            <strong>Why do I see distinctive prices for the same product?</strong>
            <p>
            Some of our products are presented through different dealers. That permits you to select your chosen provide.
            </p>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-faq btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            ACCOUNT SETTINGS
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
            <strong>How can I sign up as a purchaser on Uparzon?</strong>
            <p>
            Start by clicking on “Login” at Account withinside the top right corner of your screen. You will then be requested to provide some simple information for registration. When you have provided the specified information, Click the ‘Register’ button to complete the sign-up process. We may also send you an e-mail to welcome you to Uparzon!
            </p>
            
            <strong>I have forgotten the password to my Uparzon account. How do I access it?</strong>
            <p>
            Click "Your Account" and then "Login" at the top right corner of your screen. You will notice "Forgot your Password” on the login form. Now click on the "Forgot your Password" button to get an e-mail for your registered account with commands on a way to set a new password.
            </p>
            <strong>How can I make change the password of my account?</strong>
            <p>
                It’s easy! Follow the steps: <br />
                Click on "Account" withinside the top right corner of your screen.<br />
                Select "My Profile" under "Manage My Account" at the left side of the screen. <br/>
                Click on "Change Password. Enter the specified data and click on "Submit"
            </p>
            <strong>Why need to provide my "Phone Number" to sign up?</strong>
            <p>
            Your phone number allows us to offer timely data to you about your order. It additionally acts as your username and helps you to log in.
            </p>
            <strong>Would my account be deactivated if I do not use it for a long time?</strong>
            <p>
                We leave out you while you do not visit us enough however we never deactivate your account.
            </p>
            <strong>Why do I want to offer my email address?</strong>
            <p>
            Your email address allows us to offer well timed information to you about your order. It also acts as your username and allows you to log in.
            </p>
      </div>
    </div>
  </div>
  {/* ahdgfuaysdgfiuasdfh */}
  <div className="card">
    <div className="card-header" id="headingfour">
      <h2 className="mb-0">
        <button className="btn btn-faq btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            UPARZON SHIPPING
        </button>
      </h2>
    </div>
    <div id="collapseFour" className="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
      <div className="card-body">
            <strong>What do I do if my order did now no longer attain the promised lead time?</strong>
            <p>
            Please get in contact with our pleasant Customer Service supporters who might be capable of help you further. In the subsequent circumstances, Uparzon will not be responsible for any delays: Incomplete address Wrong address Contact not set up Failed transport Customer unavailable to receive items Other Conditions: Floods / Earthquakes / Weather situations Public holidays / Protest / Strikes Campaigns / Sale durations Electricity outage(which includes system outage)
            </p>
            
            <strong>Do I want to pay more for the explicit transport promise?</strong>
            <p>
                No, that is a unique carrier that we're presenting to our valued Dhamaka customers.
            </p>
            <strong>Should I pay a transport charge to get my Uparzon product??</strong>
            <p>
            Transport/Shipping charges will stay unchanged for Uparzon products. There aren't any extra transport charges for Uparzon products.
            </p>
            <strong>What occurs if I do not get hold of my Uparzon orders on time?</strong>
            <p>
            If you do not get hold of your Uparzon orders according to the anticipated shipping dates designated in your order, you could first take a look at the status of your order on the "Order History" web page to your Uparzon account. This permits you to look if the vendor has already shipped your order or now no longer. If the order status has not been up to date, otherwise you would really like to have more data in your order status, please touch our Uparzon customer care group through "Live Chat" or "Email".
            </p>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFive">
      <h2 className="mb-0">
        <button className="btn btn-faq btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            UPARZON RETURNS & REFUNDS
        </button>
      </h2>
    </div>
    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div className="card-body">
            <strong>What if I need to cancel my order?</strong>
            <p>
            According to Uparzon's cancellation policy, you may cancel your order without delay out of your Uparzon account earlier than the order is distributed out from Uparzon or the seller's warehouse.
            </p>
            
            <strong>What type of products can't be back because of a change of mind?</strong>
            <p>
            Change of mind go back isn't relevant for gadgets from the subsequent categories: All swimwear &28; lingerie. All groceries All virtual goods, consisting of mobile top-ups, e-books, game downloads, etc. All custom designed gadgets, bulky gadgets, or gadgets that require installations. If you have modified your thoughts and would love to go back to the item, please observe that alternate of thoughts return is simplest available if the item: Has now no longer been opened Has all seals and tags intact Is unworn, unwashed, and unaltered
            </p>
      </div>
    </div>
    </div>
    <div className="card">
    <div className="card-header" id="headingSix">
      <h2 className="mb-0">
        <button className="btn btn-faq btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            UPARZON SELLER
        </button>
      </h2>
    </div>
    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
      <div className="card-body">
            <strong>How do I be a part of Uparzon as a Seller?</strong>
            <p>
            You need to sign up for an account as a Seller and offer documentation consistent with rules.
            </p>
      </div>
    </div>
    </div>
    <div className="card">
    <div className="card-header" id="headingSeven">
      <h2 className="mb-0">
        <button className="btn btn-faq btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            UPARZON PAYMENT
        </button>
      </h2>
    </div>
    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
      <div className="card-body">
            <strong>How do I pay on Uparzon?</strong>
            <p>
            We have the subsequent payment strategies by which you could make a payment: Cash On Delivery(easy and very simple at your doorstep) Credit/ Debit Card(Visa, Master) Bkash, Rocket, Nagad.
            </p>
            
            <strong>Why became my Credit/Debit Card declined?</strong>
            <p>
            If you experience a problem finishing payment thru debit/credit card, the first factor to do is to make certain that your card is activated for online payments and which you have sufficient funds/limits to finish the transaction. Your bank let you confirm these details. Some cards issued outside Bangladesh also are not supported on Uparzon and can be declined. Remember that you may usually complete your order thru Cash on Delivery and pay with comfort at your doorstep.
            </p>
            <strong>How to pay with my Debit/Credit Card?</strong>
            <p>
            At the quit of the checkout select Credit / Debit Card as payment alternatives and comply with the steps after confirming your purchase. Make certain which you have contacted your bank and activated your Credit Card for online bills/payments.
            </p>
            <strong>Can I use two strategies of payment while ordering online?</strong>
            <p>
            Sorry, we receive only one payment approach according to order.
            </p>
            <strong>Can I pay for my order through the usage of the Uparzon app or the Uparzon website?</strong>
            <p>
            The Uparzon app and website provide all of the payment alternatives that the Uparzon website version offers. You will pay without any concerns with the desired option of your choice.
            </p>
            <strong>Can I pay with any kind of Credit or Debit card?</strong>
            <p>
            You can select to pay on Uparzon with any Visa, Master, or American Express (AMEX) cards.
            </p>
            <strong>Does Uparzon provide installment payments?</strong>
            <p>
            Sorry, we do not provide installment payments at this moment.
            </p>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingEight">
      <h2 className="mb-0">
        <button className="btn btn-faq btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            ORDER PLACEMENT
        </button>
      </h2>
    </div>
    <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
      <div className="card-body">
            <strong>How to place an order on "Uparzon"?</strong>
            <p>
            • After including products in the cart, click on the ‘Check Out’ button. • Make certain you're logged into your account. • Fill up the ‘Check out’ web page required information. • Lastly, click on the ‘Purchase’ button. • You could be shown an affirmation message.
            
            My payment was processed correctly but rather I did not get any order affirmation. What do I need to do?
            Please get in contact with us so we will check out the matter. Just e mail us or you may call us (except on public holidays)
            </p>
            
            <strong>How do I recognize my order has been confirmed?</strong>
            <p>
            We'll send you an e-mail and SMS as soon as your order has been confirmed! We'll also assist you to recognize as quickly as your order has been shipped.
            </p>
            <strong>How can I track my order?</strong>
            <p>
            We will send you normal updates approximately the status of your order through emails and SMS. After your order has left our warehouse and is on its way, you may also track its status with the aid of using signing in on your account, below the "Order History" option. Please get in contact with our Customer Support Team. Just e-mail us or you may call us(besides on public holidays).
            </p>
            <strong>What have to I do if my order is confirmed however now no longer brought for a long time?</strong>
            <p>
            You can stay updated with the status of your order always on tracking Uparzon.com.bd. If your order has now no longer been shipped within two-four days, please get in contact with our Customer Support Team. Just e-mail us or you may call us (besides on public holidays).
            </p>
            <strong>How fast can I get my order?</strong>
            <p>
            We do our high-quality to get your orders brought with the aid of using the date indexed at the product web page. We additionally provide a top rate shipping provider for decided on brands known as Fulfilled with the aid of using Uparzon. 
            </p>
            <strong>My order is delayed. What must I do?</strong>
            <p>
            We are sorry that your order is delayed. If the status has now no longer modified in a while, please get in contact with our Customer Support Team. Just e-mail us or you may call us (besides on public holidays).
            </p>
            <strong>How do I cancel my order?</strong>
            <p>
            If your order is below pre-shipped status and your order is eligible for cancellation, please get in contact with our Customer Support Team. Just e-mail us or you may call us (besides on public holidays).
            </p>
      </div>
    </div>
  </div>
    {/* cards ends here */}
</div>
            </div>
        </div>
     );
}
 
export default FAQ;