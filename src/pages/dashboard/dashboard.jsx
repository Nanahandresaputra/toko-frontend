import "./style.css";
import config from "../../config/config";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProductAction, getListProduct, getProductId } from "../../app/redux-state/produk/action";

const Dashboard = () => {
  const { listProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  return (
    <section className="mt-20 px-5 flex flex-col items-center md:mt-28">
      <div className="flex items-center w-full justify-around">
        <h1 className="text-lg font-semibold">List Product</h1>
        <Link to="add-product" className="bg-green-500 text-white font-medium p-2 hover:bg-green-600 active:bg-green-700 cursor-pointer">
          Tambah Product
        </Link>
      </div>
      <div className="w-full relative overflow-x-auto">
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            {listProduct?.map((index) => (
              <tr className="bg-green-400 flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0" key={index._id}>
                <th className="p-3 text-left">Id</th>
                <th className="p-3 text-left">Nama Produk</th>
                <th className="p-10 md:p-3 text-left">Gambar</th>
                <th className="p-5 md:p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {listProduct?.map((index, i) => (
              <tr className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0" key={i}>
                <td className="border-grey-light border hover:bg-gray-100 p-3">{index._id}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate ">{index.name}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 md:flex md:justify-center">
                  <img src={`${config.baseUrl}/${config.imgUrlProduct}/${index.image}`} alt="produk" className="w-20 h-20" />
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  <div className=" flex space-x-3">
                    <Link
                      to={`edit-product/${index._id}`}
                      className="bg-orange-400 text-white p-2 hover:bg-orange-500 active:bg-orange-600"
                      onClick={() => {
                        dispatch(getProductId(index._id));
                        localStorage.setItem("productId", index._id);
                      }}
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 text-white p-2 hover:bg-red-600 active:bg-red-700"
                      onClick={() => {
                        dispatch(deleteProductAction(index._id));
                        alert("produk berhasil dihapus");
                        window.location.reload(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
