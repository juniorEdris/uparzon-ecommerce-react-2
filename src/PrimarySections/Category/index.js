import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList(props) {
  return (
    <div className="sidebar_list_wrapper col mb-4">
      <h5 className="sidebar_headings">categories</h5>
      <ul className="sidebar_list not-square-option">
        {props.categories?.map((cat) => (
          <li>
            <Link to={`/category-products?category=${cat.slug}&id=${cat.id}`} onMouseOver={() => props.getsubcategories(cat.id)}>
              {cat.name}
            </Link>
            {/* {props.subcategories && (
                  <ul className="sidebar_sub_list  not-square-option">
                    {props.subcategories?.map((subcat) => (
                      <li
                        key={subcat.id}
                        className={`${
                          subcat.has_childcategory && 'has_section'
                        }`}>
                        <Link
                          to={`/category-products?subcategory=${subcat?.slug}&subcategory-id=${subcat?.id}`}
                          onMouseOver={() =>
                            props.getChildcategories(subcat?.id)
                          }>
                          {subcat.name}
                        </Link>
                        {props.childcategories && (
                          <ul className="sidebar_child_list not-square-option">
                            {props.childcategories.map((childcat) => (
                              <li key={childcat.id}>
                                <Link
                                  to={`/category-products?childcatgory=${childcat?.slug}&childcatgory-id=${childcat?.id}`}
                                  >
                                  {childcat.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
