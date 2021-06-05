const SingleList = (props) => {
  return (
    <div className="blog_list_wrapper col-12 row aling-items-center no-gutters mb-4">
      <div className="blog_list_image col-4">
        <img src={props.image} alt="list_images" />
      </div>
      <div className="blog_list_details col-8">
        <div className="">
          <p>{props.name}</p>
        </div>
        <div className="">
          <img src="./assets/svg/icons/ionic-eye.svg" alt="blog-views" /> 40
        </div>
      </div>
    </div>
  );
};

export default SingleList;
