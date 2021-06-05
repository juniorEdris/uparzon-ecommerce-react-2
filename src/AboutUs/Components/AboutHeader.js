import React from 'react';
import { connect } from 'react-redux';

const AboutHeader = (props) => {
  const listsOne = [
    {
      id: 1,
      name: 'Disposable Products',
    },
    {
      id: 2,
      name: 'Disposable Products',
    },
    {
      id: 3,
      name: 'Disposable Products',
    },
  ];
  const lists = [
    {
      id: 4,
      name: 'Testing Equipments',
    },
    {
      id: 5,
      name: 'Testing Equipments',
    },
    {
      id: 6,
      name: 'Testing Equipments',
    },
  ];
  return (
    <div className="about_header row mt-3">
      <div className="col-12 col-md-6 mb-4">
        <div className="about_img_container">
          <img src="./assets/images/about_us/about_header_1.png" alt="" />
        </div>
      </div>
      <div className="col-12 col-md-6 mb-4">
        <div className="about_heading mb-4">
          <h1>Modern Delivery Services</h1>
        </div>
        <div className="about_p mb-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit
            magnam magni obcaecati voluptatum molestiae dolorem. Dignissimos eum
            harum amet ducimus quo eveniet voluptatum laudantium fugit nam
            voluptatem doloremque rerum minus impedit praesentium, nesciunt
            explicabo!
          </p>
        </div>
        <div className="row">
          <div className="about_list col-12 col-md-6">
            <ul className="">
              {lists.map((list) => (
                <li key={list.id}>
                  <img
                    src="./assets/svg/icons/square-right.svg"
                    className="list_icon"
                    alt=""
                  />
                  {list.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="about_list col-12 col-md-6">
            <ul className="">
              {listsOne.map((list) => (
                <li key={list.id}>
                  <img
                    src="./assets/svg/icons/square-right.svg"
                    className="list_icon"
                    alt=""
                  />
                  {list.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutHeader);
