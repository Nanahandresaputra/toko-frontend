import { useNavigate } from "react-router-dom";
import config from "../../config/config";
import { ImPriceTag } from "react-icons/im";
import formatRupiah from "../../utils/utils";

const CardProduct = ({ value }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-white shadow-lg  mx-2 pb-5 mb-3 rounded-lg">
      <img src={`${config.baseUrl}/${config.imgUrlProduct}/${value.image}`} alt="product" className="mb-2 w-full h-40 md:h-48 lg:h-52" />
      <div className="ms-2">
        <h1 className="font-semibold h-12 text-clip overflow-hidden  md:text-lg">{value.name}</h1>
        <p className="text-gray-500 text-sm md:text-base">{value.category.name}</p>
        <p className="my-1 flex space-x-2 items-center md:text-lg">
          <ImPriceTag /> <span>{formatRupiah(value.price)}</span>
        </p>
        <button type="button" className="bg-green-500 text-white p-2 hover:bg-green-600 active:bg-green-700 rounded md:text-lg" onClick={() => navigate(`/detail/${value._id}`)}>
          Detail Produk
        </button>
      </div>
    </section>
  );
};

export default CardProduct;
