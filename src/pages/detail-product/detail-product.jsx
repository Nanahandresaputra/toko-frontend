import { useDispatch, useSelector } from "react-redux";
import config from "../../config/config";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailProduct } from "../../app/redux-state/produk/action";

const DetailProduct = () => {
  const { detail } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  return (
    <section className="flex px-5 flex-col items-center mt-28 mb-10">
      <img src={`${config.baseUrl}/${config.imgUrlProduct}/${detail.image}`} className="w-72 h-64 md:w-80 md:h-72 lg:w-96 lg:h-80" />
      <h1 className="text-xl font-bold my-5 md:text-2xl">{detail.name}</h1>
      <div className="text-lg text-justify whitespace-pre-line md:text-xl md:w-9/12 lg:w-8/12" dangerouslySetInnerHTML={{ __html: detail.description }} />
    </section>
  );
};

export default DetailProduct;
