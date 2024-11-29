import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ handleSubmitFormData }) {
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
    handleSubmitFormData(data);
    reset();
  };

  return (
    <div className="border-4 border-sky-600 p-3 mt-5 rounded-xl">
      <form
        action=""
        className="flex flex-col justify-center items-center gap-2"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <input
          type="text"
          {...register("image")}
          id=""
          placeholder="Image-Url"
          className="border-2 border-sky-600 rounded p-2"
          required
        />
        <input
          type="text"
          {...register("name")}
          id=""
          placeholder="Name"
          className="border-2 border-sky-600 rounded p-2"
          required
        />
        <input
          type="text"
          {...register("email")}
          id=""
          placeholder="Email"
          className="border-2 border-sky-600 rounded p-2"
          required
        />
        <button
          type="Submit"
          className="border-2 border-sky-600 rounded px-2 text-sky-600 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
