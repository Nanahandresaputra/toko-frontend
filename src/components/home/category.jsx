import config from "../../config/config";

const Category = ({ value, onClick }) => {
  return (
    <section className="w-24 mb-3 py-3 rounded bg-white shadow-lg flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 cursor-pointer md:w-40" onClick={() => onClick(value)}>
      <img src={`${config.baseUrl}/${config.imgUrlCategory}/${value.category_img}`} alt="img category" className="my-3 w-16 md:w-28" />
      <p className="text-sm md:text-base">{value.name}</p>
    </section>
  );
};

export default Category;
