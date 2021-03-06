import React from 'react';
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
            <div className="form-group col-12">
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
                {props.district_lists?.map((district) => (
                  <option
                    value={district.id}
                    key={district.name}
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
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="upazila">Upazila</label>
              <select
                id="upazilla"
                className="form-control form-control-lg"
                name="upazilla"
                onChange={handleChange}
                required>
                <option value="" selected>
                  Choose...
                </option>
                {props.upazilla_lists[0]?.upazilas?.map((area) => (
                  <option
                    value={area.id}
                    key={area.name}
                  >
                    {area.name}
                  </option>
                ))}
              </select>
              {props.details.upazilla === '' && (
                <small className="text-danger">
                  Please provide your area name.
                </small>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="area">Area(optional)</label>
              <select
                id="area"
                className="form-control form-control-lg"
                name="area"
                onChange={handleChange}
                required>
                <option value="" selected>
                  Choose...
                </option>
                { props.area_lists[0]?.Unions?.map((area) => (
                  <option
                    value={area.id}
                    key={area.name}
                  >
                    {area.name}
                  </option>
                ))}
              </select>
              {/* {props.details.area === '' && (
                <small className="text-danger">
                  Please provide your city name.
                </small>
              )} */}
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
          </div>
          <div className="form-row">
            <div className="form-group col-12 text-right">
              <span className={`address_checkbox ${props.storeAddress && 'active'}`} onClick={() => props.setStoreAddress(!props.storeAddress)}>Make it your Default Address</span>
            </div>
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

