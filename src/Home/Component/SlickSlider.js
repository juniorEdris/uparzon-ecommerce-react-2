import Slider from 'react-slick';
const SlickSlider = (props) => {
  return (
    <div className="">
      <Slider>
        {props.sliders?.map((image) => (
          <div key={image.photo}>
            <img src={`https:${image.photo}`} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
