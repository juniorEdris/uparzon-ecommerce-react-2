import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingTwo from '../../PrimarySections/SectionUtils/SectionHeadingTwo';
import SeeMoreBtn from '../../PrimarySections/SectionUtils/SeeMoreBtn';
import Body from './SubComponent/NecessaryProducts';

const NecessaryProducts = (props) => {
  return (
    <div className="necessary_product_section mb-5">
      {props.loading ? (
        <div className="container-md-fluid">
          <Skeleton width="100%" height={60} className="mb-4" />
          <div className="row">
            {Array(6)
              .fill()
              .map((x, i) => (
                <div className="col-6 col-md-4 col-lg-2" key={i}>
                  <Skeleton width="100%" height={300} />
                </div>
              ))}
          </div>
        </div>
      ) : (
        props.products?.length > 0 && (
          <div className="container-md-fluid">
            <SectionHeadingTwo
              textOne={'Neccesary Popular'}
              textTwo={'Products'}
            />
            <Body />
            <SeeMoreBtn />
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.neccessaryProducts,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NecessaryProducts);
