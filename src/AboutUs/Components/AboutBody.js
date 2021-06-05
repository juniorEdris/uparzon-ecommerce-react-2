import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AboutBody = (props) => {
  return (
    <div className="about_body">
      <div className="body_top_button">
        <Link to="">
          <img src="./assets/svg/icons/triangle-up.svg" alt="" />
        </Link>
        <p>Quick and safe high-tech medical devices</p>
      </div>
      <div className="body_qoutes col-12 row">
        <div className="quote col-12 col-md-6">
          <div className="row">
            <div className="qoutes_img col-1 p-0">
              <img src="./assets/svg/icons/quote-right.svg" alt="" />
            </div>
            <div className="qoutes_text col">
              <h3>Outstanding Biomedical and technology</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis totam ab nemo, cupiditate aliquam ipsa, sequi iure cum
                repudiandae est, eaque aspernatur libero ullam quo minus
                voluptate. Ipsum aliquam praesentium, error, eveniet explicabo
                sequi magnam, labore illo sapiente doloribus repellendus amet
                dolores? Pariatur, non fugiat.
              </p>
            </div>
          </div>
        </div>
        <div className="quote col-12 col-md-6">
          <div className="row">
            <div className="qoutes_img col-1 p-0">
              <img src="./assets/svg/icons/quote-right.svg" alt="" />
            </div>
            <div className="qoutes_text col">
              <h3>Outstanding Biomedical and technology</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis totam ab nemo, cupiditate aliquam ipsa, sequi iure cum
                repudiandae est, eaque aspernatur libero ullam quo minus
                voluptate. Ipsum aliquam praesentium, error, eveniet explicabo
                sequi magnam, labore illo sapiente doloribus repellendus amet
                dolores? Pariatur, non fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutBody);
