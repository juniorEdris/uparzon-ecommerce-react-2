import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  clearSuccessPrescription,
  PrescriptionUpload,
} from '../../Redux/Action/PrescriptionUploadAction';
import { NameInput } from './NameInput';

const UploadSection = (props) => {
  const [error, setError] = useState('');
  const [images, setImages] = useState({ image: '', photo: '' });
  const [input, setInput] = useState({ name: '' });
  const handleChange = (e) => {
    setError('');
    setImages({ photo: e.target.files[0] });
  };
  const inputChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };
  const submitFrom = (e) => {
    if (images.photo) {
      const fd = new FormData();
      fd.append('images', images.photo, images.photo.name);
      props.upload(input.name, fd);
    } else {
      setError('Select an Image');
    }
  };
  const removeImage = (image, i) => {
    setImages({ photo: '' });
  };
  return (
    <div className="upload_section col col-md-8">
      {/* <div className="upload_section_top">
        <span>home/upload prescription</span>
      </div> */}{' '}
      <div className="upload_section_middle">
        <span className="">upload prescription</span>
        {props.error?.prescription && (
          <div className="mt-2 mb-2 text-center">
            <p className="text-danger">{props.error.prescription}</p>
          </div>
        )}
        <form action="" method="POST" encType="multipart/formdata">
          <NameInput
            input={input}
            setInput={setInput}
            inputChange={inputChange}
          />
          <div className="file_upload_btn mt-4 mb-3">
            <div className="image_preview row">
              {images.photo !== '' ? (
                <div className="per_image col-6 p-1 ">
                  <span
                    className=" remove_picture lnr lnr-cross"
                    onClick={() => removeImage()}></span>
                  <img src={URL.createObjectURL(images.photo)} alt="" />
                </div>
              ) : (
                <label for="file-upload">
                  <img
                    src={`./assets/svg/icons/upload.svg`}
                    className="file-input-img"
                    alt=""
                  />
                </label>
              )}
            </div>
            <div className="">
              <input
                type="file"
                className="file-input"
                name=""
                id="file-upload"
                multiple={true}
                onChange={handleChange}
              />
            </div>
            <span className="text-muted">
              upload photo of your prescription
            </span>
            {/* {props.status && (
              <div className="">
                <span className="text-success">{props.success}</span>
              </div>
            )} */}
            {error.length > 0 && (
              <div className="">
                <span className="text-danger">{error}</span>
              </div>
            )}
            <label
              for="file-upload"
              className="gallery-btn btn col offset-md-3 col-md-6 btn-block btn-outlined">
              <img
                src={`./assets/svg/icons/gallery.svg`}
                className="gallery-btn-img"
                alt=""
              />
              Gallery
            </label>
          </div>
          <div className="submit_button">
            <button
              type="button"
              className="btn col offset-md-3 col-md-6"
              onClick={submitFrom}
              disabled={input.name.length < 1}>
              Procced
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Prescription.uploadloading,
  success: state.Prescription.prescriptionSuccess,
  status: state.Prescription.prescriptionStatus,
  error: state.Prescription.error,
});

const mapDispatchToProps = (dispatch) => ({
  upload: (name, image) => dispatch(PrescriptionUpload(name, image)),
  closePopup: () => dispatch(clearSuccessPrescription()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadSection);
