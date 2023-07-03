import { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../components/input-field/input-field";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../../app/redux-state/produk/action";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { listCategory } = useSelector((state) => state.category);
  const yupValidator = Yup.object().shape({
    nama: Yup.string().required("masukan nama produk"),
    harga: Yup.number().typeError("masukan harga barang").required("masukan harga barang"),
    kategori: Yup.string().required("masukan kategori"),
    gambar: Yup.mixed()
      .test("required", "masukan gambar produk", (file) => {
        return file.length;
      })
      .test("type", "masukan file gambar jpg/jpeg/png", (file) => {
        let typeFile = ["image/jpg", "image/jpeg", "image/png"];
        if (file.length > 0) {
          return file && typeFile.includes(file[0].type);
        }
      }),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupValidator) });

  const [textArea, setTextArea] = useState(() => EditorState.createEmpty() || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitEdit = (data) => {
    let deskripsi = draftToHtml(convertToRaw(textArea.getCurrentContent()));
    let findCategory = listCategory.find((category) => category.name.toLowerCase() === data.kategori.toLowerCase());
    !findCategory ? setError("kategori", { type: "custom", message: "masukan kategori: buku, smartphone, mainan" }) : dispatch(editProductAction({ data, deskripsi }));
    alert("produk telah diedit");
    navigate("/");
  };

  return (
    <section className="mt-24 flex flex-col px-5 justify-center items-center ">
      <h1 className="text-xl font-bold my-3 md:my-6 lg:my-5">Tambah Produk</h1>
      <div className="bg-white shadow-lg p-5">
        <form onSubmit={handleSubmit(submitEdit)}>
          <InputField label="Nama Produk" type="text" style={errors.nama ? "input-error" : "input-primary"} register={register} regName="nama" errorMessage={errors.nama?.message} placeholder="masukan nama produk" />

          <InputField label="Harga" type="number" style={errors.harga ? "input-error" : "input-primary"} register={register} regName="harga" errorMessage={errors.harga?.message} placeholder="masukan harga" />

          <InputField label="Kategori" type="text" style={errors.kategori ? "input-error" : "input-primary"} register={register} regName="kategori" errorMessage={errors.kategori?.message} placeholder="masukan kategori produk" />

          <InputField label="Gambar" type="file" style={errors.gambar ? "input-file-error" : "input-file-primary"} register={register} regName="gambar" errorMessage={errors.gambar?.message} placeholder="masukan gambar produk" />

          <label className="flex flex-col space-y-3 my-3">
            <span className="text-lg font-semibold">Deskripsi</span>
            <Editor toolbarClassName="border border-gray-400" wrapperClassName="border border-gray-400" editorClassName="mx-3" defaultEditorState={textArea} onEditorStateChange={setTextArea} />
          </label>
          <button type="submit" className="text-white rounded bg-green-500 p-3 hover:bg-green-600 active:bg-green-700">
            Tambah
          </button>
        </form>
        {/* <div dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(textArea.getCurrentContent())) }} /> */}
      </div>
    </section>
  );
};

export default EditProduct;
