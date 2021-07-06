import { useEffect } from 'react';
import { toTheTop } from '../../PrimarySections/SectionUtils/WindowTop';
import './privacy.css';

export default function PrivacyPage() {
  useEffect(() => {
    toTheTop();
  }, []);
  return (
    <div className="privacy_page col mt-5">
      <div className="container mt-3">
        <h1 className="text-center mb-1">Privacy &#38; Policy</h1>
        <p>
          Uparzon, the biggest growing E-Commerce website in Bangladesh is
          dedicated to protecting your privacy and appreciate and under the Laws
          of the peoples’ Republic of Bangladesh contained in ‘The Digital
          Security Act, 2018’, ‘The Data Protection Act, 2018’, ‘ICT Act, 2006’
          uphold your rights. By the usage of this website or presenting us with
          your private records, you agree to and consent to the collection, use,
          protecting, and disclosure of the private records through Uparzon,
          supplied by you, as set out on this policy. We act in our customers'
          interest and are transparent about the processing of your private
          information. Our Policy explains a way to contact us when you have any
          questions on the control of your private records or would really like
          to access the private records we keep about you.
        </p>
        <p>
          This Privacy Policy clarifies how we acquire, utilize, and (under
          particular conditions) uncover your personal data. This Privacy Policy
          moreover clarifies the method we've taken to secure your personal
          data. At long last, this Privacy Policy clarifies your alternatives
          with appreciate to the accumulation, utilize, and divulgence of your
          personal data. By going to the website particularly or via another
          site, you acknowledge the practices depicted on this Policy.
        </p>
        <p>
          Information security involves trust and your safety is important to
          us. We should, alongside these lines, simply utilize your name and
          different information which identifies with you withinside the manner
          set out in this Privacy Policy. We will simply collect data in which
          it is essential for us to do as such and we are able to simply collect
          data at the off chance that it is considerable to our dealings with
          you.
        </p>

        <p>
          We will simply preserve your data for whatever length of time that
          we're either required to via way of means of law or as is pertinent
          for the reasons for which it became gathered. And We may also amend
          this Policy at any time with the aid of using posting the updated
          version on our website.
        </p>
        <br />
        <br />
        <br />

        <div className="privacy_heading mb-3">
          <span>What kind of data we collect?</span>
        </div>
        <p>
          We may also collect different snippets of information in the event
          which you look to publish a request for an item with us at the site.
        </p>
        <p>
          We collect, store, and system your records for dealing with your
          purchase at the site and any potential claims which you can make later
          on, and for your better conversation with our administration. We may
          also collect individual information consisting of, however not
          restrained to, your title, name, sexual orientation, date of birth,
          e-mail address, postal address, conveyance address (if unique), phone
          number, mobile number, fax number, installment diffused elements,
          installment card details of interest or economic stability subtle
          elements.
        </p>
        <p>
          We will utilize the records you supply to empower us to process your
          requests and to provide you the administrations and records presented
          via our site and that you ask. Further, we are able to utilize the
          records you provide to direct your record with us; verify and do
          financial exchanges in connection to installments you make; overview
          the downloading of records from our site; send you records we
          determine you can discover valuable or that you have requested for
          from us, which includes information approximately our items and
          administrations when you have confirmed that you haven't protested
          being reached for those reasons. Subject to getting your assent we may
          also get in touch with you through e-mail with points of interest of
          various items and administrations. In the event which you prefer not
          to get any showcasing interchanges from us, you may quit whenever.
        </p>
        <p>
          We may also likewise ship you different data about us, the Site, our
          special sites, our gadgets, offers advancements, our bulletins,
          whatever figuring out with specific groups in our accumulating or our
          commercial enterprise accomplices. We may also help to anonymize
          records about customers of the site through and massive and utilize it
          for distinctive purposes, which includes getting to know the overall
          location of the customers and use of particular elements of the site
          or a connection contained in an e-mail to the ones enlisted to get
          them, and offering that anonymized records to outsiders, for example,
          distributors. Notwithstanding, that anonymized records may not be
          suited for distinguishing you by and by.
        </p>
        <br />
        <br />
        <br />
        <div className="privacy_heading mb-3">
          <span>How does Uparzon utilize your information?</span>
        </div>
        <p>
          Data about our customers is a crucial piece of our business, and we
          aren't withinside the count of pitching it to others. We share client
          data just as depicted beneath and with backups uparzon.com, controls
          that either are liable to this Privacy Notice or take after practices
          in any event as protective as those depicted on this Privacy Notice.
        </p>
        <p>
          Uparzon will collect personal information and all other necessary
          information only by lawful and fair means and not in an unreasonably
          intrusive way. If it is reasonable and practical to do so, Uparzon
          will only collect personal information about you directly from you.
          Uparzon may collect your personal information from reputable third
          party lead generation sources for marketing purposes, but only where
          you have consented to the disclosure of your information to Uparzon
          and for Uparzon to send you marketing communications. Uparzon will not
          collect personal information unless the information is reasonably
          necessary for our functions and activities.
        </p>
        <p>
          You may also request get admission to in your private data in our
          customer account database, or seek correction of it, through
          contacting our customer support team.
        </p>
        <p>
          Uparzon, upon situation and necessity, may charge a reasonable fee
          that is not excessive to cover the charges of retrieving your personal
          information from our customer account database. Uparzon will not
          charge you for making the request.
        </p>
        <p>
          If you believe that Uparzon holds personal information about you in
          our customer account database that is not accurate, complete,
          up-to-date, relevant or information that is misleading then you may
          request its amendment and Uparzon will respond to your request within
          a reasonable time. Uparzon will not charge you for correcting your
          personal information.
        </p>
        <p>
          If Uparzon no longer needs your personal information for any the
          purposes set out in this policy, or as otherwise required by Law,
          Uparzon will take such steps as are affordable withinside the
          instances to destroy the data or to de-perceive it.
        </p>
        <p>
          Uparzon will take reasonable steps to protect the personal information
          it holds from misuse, interference and loss and from unauthorized
          access, modification or disclosure.
        </p>
        <br />
        <br />
        <br />
        <div className="privacy_heading mb-3">
          <span>Miscellaneous</span>
        </div>
        <p>
          Uparzon reserves the right to modify this Privacy Policy in whole or
          in part from time to time without notice and amendments will be
          effective immediately upon posting of the amended Privacy Policy on
          the Uparzon website and app.
        </p>
      </div>
    </div>
  );
}
