import banner from "../../assets/bannner.jpg";
import config from "../../config/config";

const Banner = ({ categoryBanner }) => {
  // console.log(categoryBanner === undefined ? "fsjfdlsjkfl" : "horee");
  return (
    <section className="md:w-full md:flex md:justify-center">
      <img src={categoryBanner === undefined ? banner : `${config.baseUrl}/${config.imgUrlCategory}/${categoryBanner}`} className="md:w-10/12 lg:w-9/12 lg:max-h-96" />
    </section>
  );
};

export default Banner;
