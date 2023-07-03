import { useDispatch, useSelector } from "react-redux";
import { Banner, Category, CardProduct } from "../../components/home/index";
import { useEffect } from "react";
import { getListProduct, getParamsCategory } from "../../app/redux-state/produk/action";
import { getCategoryId, getDetailCategory, getListCategory } from "../../app/redux-state/category/action";
import { ImSpinner9 } from "react-icons/im";

const Home = () => {
  const { listProduct, categoryParams, status } = useSelector((state) => state.product);
  const { listCategory, detailCategory, categoryId } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(true);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 1000);

  useEffect(() => {
    dispatch(getListProduct());
    dispatch(getListCategory());
    dispatch(getDetailCategory());
  }, [dispatch, categoryParams, categoryId]);

  const paramsCategory = (query) => {
    dispatch(getParamsCategory(query.name));
    dispatch(getCategoryId(query._id));
  };

  return status != "success" ? (
    <div className="px-5 flex flex-col h-screen space-y-2 justify-center items-center">
      <ImSpinner9 className="animate-spin text-5xl" />
      <h1 className="text-2xl">Loading...</h1>
    </div>
  ) : (
    <section className="mt-20 flex flex-col items-center justify-center md:mt-24">
      <Banner categoryBanner={detailCategory.banner_img} />
      <div className="mt-10 w-full  md:w-9/12">
        <h1 className="bg-green-500 text-white font-bold p-3 mb-8 lg:text-xl">Kategori</h1>
        <div className="flex flex-wrap space-x-3  justify-center md:mt-14  md:space-x-5 lg:space-x-8">
          {listCategory?.map((index, i) => (
            <Category key={i} value={index} onClick={paramsCategory} />
          ))}
        </div>
      </div>
      <div className="my-12">
        <h1 className="bg-green-500 text-white font-bold p-3 mb-8 lg:text-xl">Produk</h1>
        <div className="grid grid-cols-2 items-center md:grid-cols-3  lg:grid-cols-5 gap-3">
          {listProduct?.map((index, i) => (
            <CardProduct key={i} value={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
