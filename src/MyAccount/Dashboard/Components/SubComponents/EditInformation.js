import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PopUp } from '../../../../PrimarySections/SectionUtils/PopUp';
import {
  ClearResponse,
  StoreAccInfo,
} from '../../../../Redux/Action/AccountInfoAction';
import { GetAreaOption } from '../../../../Redux/Action/GetUserInfoAction';

const EditInformation = (props) => {
  console.log(props.loading, props.response, props.info);
  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    district: '',
    area: '',
    zip: '',
  });
  useEffect(() => {
    setInputs({
      name: props.info?.name,
      phone: props.info?.phone,
      email: props.info?.email,
      district: props.info?.district || '',
      area: props.info?.area || '',
      address: props.info?.address,
      zip: props.info?.zip || '',
    });
  }, [props.info]);
  useEffect(() => {
    props.getArea(inputs.district);
  }, [inputs.district]);
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };
  const submitFrom = (e) => {
    e.preventDefault();
    props.storeInfo(inputs);
  };
  const closePopup = (e) => {
    props.clearResponse();
    // setInputs({
    //   name: '',

    //   address: '',
    //   district: '',
    //   area: '',
    // });
  };
  return (
    <div className="edit_information">
      {props.response && <PopUp close={closePopup} response={props.response} />}
      <div className="order_header pl-4 pb-3 pt-3 pr-4 mb-3">
        <h3>Profile</h3>
      </div>
      <div className="col-md-9 m-md-auto acc_info_inputs pr-md-5 pl-md-5 mb-5 mb-md-0">
        <form>
          <div className="form-row">
            <div className="form-group col-6">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                placeholder="First Name"
                onChange={handleChange}
                value={inputs.first_name}
              />
              {inputs.first_name === '' && (
                <small className="text-danger">Please provide your name.</small>
              )}
            </div>
            <div className="form-group col-6">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                value={inputs.last_name}
              />
              {inputs.last_name === '' && (
                <small className="text-danger">Please provide your name.</small>
              )}
            </div>
          </div>
          <div className="form-row mt-4">
            <div className=" form-group col-6">
              <label htmlFor="phone">Mobile</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  // onChange={handleChange}
                  value={inputs.phone}
                  placeholder="Phone number"
                />
                <div className="col-12">
                  {inputs.phone === '' && (
                    <small className="text-danger">
                      Please provide your mobile number.
                    </small>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group col-6">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={inputs.email}
              />
              {inputs.email === '' && (
                <small className="text-danger">
                  Please provide your email address.
                </small>
              )}
            </div>
          </div>
          {/* <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="district">District</label>
              <select
                id="district"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={inputs.district}
                defaultValue={inputs.district}>
                <option selected value="">
                  Choose...
                </option>
                {props.info?.districts_lists?.map((district) => (
                  <option value={district.id} key={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
              {inputs.district === '' && (
                <small className="text-danger">
                  Please provide your discrict name.
                </small>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="area">Area</label>
              <select
                id="area"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={inputs.area}
                defaultValue={inputs.area}>
                <option selected value="">
                  Choose...
                </option>
                {props.userArea &&
                  props.userArea[0]?.areas?.map((area) => (
                    <option value={area.id} key={area.name}>
                      {area.name}
                    </option>
                  ))}
              </select>
              {inputs.area === '' && (
                <small className="text-danger">
                  Please provide your area name.
                </small>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="address"
              placeholder="Apartment, studio, or floor"
              onChange={handleChange}
              value={inputs.address}
            />
            {inputs.address === '' && (
              <small className="text-danger">
                Please provide your address.
              </small>
            )}
          </div> */}
          <div className="account_submit_btn">
            <Link
              to="#"
              onClick={submitFrom}
              className={`${
                inputs.address === '' && 'pointer_disabled'
              } btn col-12 mt-4`}>
              Update
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state.UserInfo.info,
  userArea: state.UserInfo.userAreas,
  loading: state.AccountInfo.storeInfoloading,
  response: state.AccountInfo.storeInfoStatus,
});

const mapDispatchToProps = (dispatch) => ({
  storeInfo: (object) => dispatch(StoreAccInfo(object)),
  clearResponse: () => dispatch(ClearResponse()),
  getArea: (id) => dispatch(GetAreaOption(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditInformation);
