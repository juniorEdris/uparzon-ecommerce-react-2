import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PopUp } from '../PrimarySections/SectionUtils/PopUp';
import SpinLoader from '../PrimarySections/SectionUtils/SpinLoader';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import { clearSuccessPrescription } from '../Redux/Action/PrescriptionUploadAction';
import PreviewSection from './Components/PreviewSection';
import UploadSection from './Components/UploadSection';
import './uploadSection.css';
const PrescriptionUpload = (props) => {
  useEffect(() => {
    toTheTop();
  }, []);
  return (
    <div className="container-md-fluid prescription_body">
      {props.loading && <SpinLoader />}
      {props.success && (
        <PopUp response={props.success} close={props.closePopup} />
      )}
      <div className="prescription_upload row">
        <UploadSection />
        <PreviewSection />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Prescription.uploadloading,
  status: state.Prescription.prescriptionStatus,
  success: state.Prescription.prescriptionSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  closePopup: () => dispatch(clearSuccessPrescription()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionUpload);
