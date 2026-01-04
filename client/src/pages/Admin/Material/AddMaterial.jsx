import React, { useState } from "react";
import useUom from "../../../hooks/useUom";
import useOrigin from "../../../hooks/useOrigin";
import Loading from "../../../components/Loading";
import Swal from "sweetalert2";
import { api } from "../../../api/api";
import { useNavigate } from "react-router";

const AddMaterial = () => {
  const { uoms, isLoading: uomLoading } = useUom();
  const { origins, isLoading: originLoading } = useOrigin();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setIsSubmitting(true);
    console.log(data);

    api
      .post("/materials", data)
      .then((res) => {
        if (res.data) {
          e.target.reset();
          Swal.fire({
            icon: "success",
            title: "Your item has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/admin/materials");
        } else {
          Swal.fire({
            title: "Something went worng!",
            icon: "error",
          });
        }
      })
      .catch((err) => {
        if (err?.response?.data?.err?.code === 11000) {
          Swal.fire({
            title: "This item already existed!",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Something went worng!",
            icon: "error",
          });
        }
      })
      .finally(() => setIsSubmitting(false));
  };

  if (uomLoading || originLoading) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
      <fieldset className="grid gap-4 m-4 p-4 border border-gray-200 rounded-2xl shadow-xl shadow-gray-400">
        <legend className="fieldset-legend">Add Material</legend>
        <label className="floating-label">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="input input-md w-full"
          />
          <span>Name</span>
        </label>
        <select
          defaultValue="Pick a Origin"
          name="originId"
          required
          className="select w-full"
        >
          <option disabled={true}>Pick a Origin</option>
          {origins?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          defaultValue="Pick a UOM"
          name="primaryUomId"
          required
          className="select w-full"
        >
          <option disabled={true}>Pick a UOM</option>
          {uoms?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>

        <div className="grid justify-items-center">
          <button disabled={isSubmitting} className="btn w-6/12">
            Save
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default AddMaterial;
