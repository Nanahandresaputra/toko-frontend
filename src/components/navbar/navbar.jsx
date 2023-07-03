import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getParamsCategory } from "../../app/redux-state/produk/action";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    open === false ? setOpen(true) : setOpen(false);
  };
  return (
    <section className="w-full h-16 z-50  bg-green-500 items-center text-white fixed top-0 flex justify-between md:justify-around md:h-20">
      <h1 className="font-semibold text-lg ms-5 cursor-pointer hover:text-gray-200 active:text-gray-300 md:text-xl" onClick={() => navigate("/")}>
        TOKO ONLINE
      </h1>
      <div className="me-5" onClick={handleOpen}>
        {!open ? <AiOutlineMenu className="text-2xl  block md:hidden" /> : <IoMdClose className="text-3xl  block md:hidden" />}
        <ul className="hidden text-xl font-semibold md:flex md:space-x-5 lg:space-x-12">
          <li className="cursor-pointer hover:text-gray-200 active:text-gray-300" onClick={() => navigate("/")}>
            Home
          </li>
          <li
            className="cursor-pointer hover:text-gray-200 active:text-gray-300"
            onClick={() => {
              navigate("/dashboard");
              dispatch(getParamsCategory(""));
            }}
          >
            Dashboard
          </li>
        </ul>
      </div>
      <ul className={!open ? "absolute opacity-0 bg-green-500 -top-16 p-3 w-full font-semibold text-lg transition duration-500 md:hidden" : "absolute bg-green-500 top-16 p-3 w-full font-semibold text-lg transition duration-500 md:hidden"}>
        <li onClick={() => navigate("/")}>Home</li>
        <li
          onClick={() => {
            navigate("/dashboard");
            dispatch(getParamsCategory(""));
          }}
        >
          Dashboard
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
