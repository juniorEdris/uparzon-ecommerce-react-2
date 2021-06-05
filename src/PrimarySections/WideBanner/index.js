import './widebanner.css';
const HomeWideBanner = (props) => {
  return (
    <div className="home_wide_banners">
      {props.fullWidth ? (
        <div className="full_width_banner w-100">
          <img src={props.imageone} alt="" />
        </div>
      ) : (
        <div className="half_width_banner w-100 d-flex">
          <div className="col-6">
            <img src={props.imageone} alt="" />
          </div>
          <div className="col-6">
            <img src={props.imagetwo} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeWideBanner;
