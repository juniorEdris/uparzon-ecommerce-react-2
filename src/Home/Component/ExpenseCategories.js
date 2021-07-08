import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ExpenseCategories = (props) => {
  const categories = [
    {
      id: 1,
      image: 'food.png',
      name: 'food',
    },
    {
      id: 2,
      image: 'clothing.png',
      name: 'clothing',
    },
    {
      id: 3,
      image: 'housing.png',
      name: 'housing',
    },
    {
      id: 4,
      image: 'education.png',
      name: 'education',
    },
    {
      id: 5,
      image: 'treatment.png',
      name: 'treatment',
    },
    {
      id: 6,
      image: 'transportation.png',
      name: 'transportation',
    },
    {
      id: 7,
      image: 'lifestyle.png',
      name: 'lifestyle',
    },
    {
      id: 8,
      image: 'construction.png',
      name: 'construction',
    },
    {
      id: 9,
      image: 'legal-cost.png',
      name: 'legal cost',
    },
    {
      id: 10,
      image: 'others.png',
      name: 'others',
    },
  ];
  return (
    <div className="home_feature_area mb-5 mb-md-2 ">
      <div className="container-md-fluid">
        <div className="features_body">
          <div className="expense_headings"></div>
          <div className="row align-tems-center">
            {categories.map((image) => (
              <div
                className={`single_feature col-features col-6 mb-3`}
                key={image.id}>
                <div className="d-flex align-items-center feature_shadow expense-cat-border flex-wrap justify-content-center justify-content-md-around bg-uparzon-light">
                  <div className="image p-0 col-5">
                    <img
                      src={`./uparzonassets/uparzonimages/expenseCategory/${image.image}`}
                      className="expense-cat-images"
                      alt={'feature images'}
                    />
                  </div>
                  <div className="expense-text mb-2 p-0 col-7">
                    <p className="p-0 m-0">
                      {image.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCategories);
