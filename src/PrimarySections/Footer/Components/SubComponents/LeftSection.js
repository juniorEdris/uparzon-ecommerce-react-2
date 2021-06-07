const LeftSection = (props) => {
  return (
    <div className="col-md-6">
      <div className="row no-gutters">
        <div className="col-6 footer_top_logo">
          <img
            src="./uparzonassets/uparzonimages/logo/Web-Uparzon-Logo.png"
            alt="uparzon logo"
          />
          <p>
            An active platform that makes you adaptable with all the warmest
            features of Uparzon store, Uparzon community, Uparzon agent, and
            uparzon career long with a platform named Wallet where you can refer
            and earn money.
          </p>
        </div>
        <div className="col-6 text-center footer_top_contact pl-3 pr-3">
          <h5 className="footer_heading">Contact us</h5>
          <p className="mb-2">
            Address: RF Zohura Tower (7th Floor), 1401. Shekh Mujib Road,
            Chowmuhony, Agrabad Chittagong
          </p>
          <div className="social-icons">
            <ul className="media-icons d-flex justify-content-center align-items-center">
              <li>
                <a href="https://www.facebook.com">
                  <img
                    src="./uparzonassets/uparzonimages/socialIcons/fb.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.twetter.com">
                  <img
                    src="./uparzonassets/uparzonimages/socialIcons/tweetter.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <img
                    src="./uparzonassets/uparzonimages/socialIcons/youtube.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linked.in">
                  <img
                    src="./uparzonassets/uparzonimages/socialIcons/linked.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
