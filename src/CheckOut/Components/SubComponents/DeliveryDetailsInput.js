import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const DeliveryDetails = (props) => {
  const handleChange = (e) => {
    props.setDetails({
      ...props.details,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="">
      <div className="delivery_details chekoutCard">
        <div className="checkout_headings">
          <h4>Delivery Details</h4>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="full_name">Name</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="full_name"
                defaultValue={props.info?.name}
                name="name"
                onChange={handleChange}
              />
              {props.details.name === '' && (
                <div className="text-danger">Please provide your name.</div>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="mobile"
                defaultValue={props.info?.phone}
                name="phone"
                // onChange={handleChange}
                readOnly
              />
              {props.details.phone === '' && (
                <small className="text-danger">
                  Please provide your mobile number.
                </small>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="Email"
              placeholder="Email"
              defaultValue={props.info?.email}
              name="email"
              onChange={handleChange}
            />
            {props.details.email === '' && (
              <small className="text-danger">
                Please provide your email address.
              </small>
            )}
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="district">District</label>
              <select
                id="district"
                className="form-control form-control-lg"
                name="district"
                onChange={handleChange}
                required>
                <option value="" selected>
                  Choose...
                </option>
                {props.info?.districts_lists?.map((district) => (
                  <option
                    value={district.id}
                    key={district.name}
                    // selected={Number(props.details?.district) === district.id}
                  >
                    {district.name}
                  </option>
                ))}
              </select>
              {props.details.district === '' && (
                <small className="text-danger">
                  Please provide your district name.
                </small>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="area">Area</label>
              <select
                id="area"
                className="form-control form-control-lg"
                name="area"
                onChange={handleChange}
                required>
                <option value="" selected>
                  Choose...
                </option>
                {props.useArea[0]?.areas?.map((area) => (
                  <option
                    value={area.id}
                    key={area.name}
                    // selected={Number(props.details?.area) === area.id}
                  >
                    {area.name}
                  </option>
                ))}
              </select>
              {props.details.area === '' && (
                <small className="text-danger">
                  Please provide your area name.
                </small>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="address"
                placeholder="Apartment, studio, or floor"
                defaultValue={props.info?.address}
                name="address"
                onChange={handleChange}
              />
              {props.details.address === '' && (
                <small className="text-danger">
                  Please provide your address.
                </small>
              )}
            </div>
            {/* <div className="form-group col-md-6">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="zip"
                placeholder="zip code"
                defaultValue={props.info?.zip}
                name="zip"
                onChange={handleChange}
              />
              {props.details.zip === '' && (
                <small className="text-danger">
                  Please provide your zip code.
                </small>
              )}
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.UserInfo.loading,
  deliveryTypes: state.UserInfo.delivery_types,
  info: state.UserInfo.info,
  status: state.UserInfo.status,
  useArea: state.UserInfo.userAreas,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails);

//
// area
// address
// zip
