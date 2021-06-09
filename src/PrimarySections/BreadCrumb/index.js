import React from 'react';
import { connect } from 'react-redux';
import './breadcrumbs.css';

const Breadcrumbs = (props) => {
  return (
    <div className="uparzon-breadcrumbs">
      <div className="container-md-fluid">
        {/* <ul>
                    <li>
                        <Link href=''>
                            <a >home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a className='active'>shop</a>
                        </Link>
                    </li>
                </ul> */}
        <span>Home</span> <span>/</span> <span className="active">Shop</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
