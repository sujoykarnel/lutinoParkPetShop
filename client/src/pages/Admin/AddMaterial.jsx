import React from "react";
import useUom from "../../hooks/useUom";
import useOrigin from "../../hooks/useOrigin";

const AddMaterial = () => {
  const uoms = useUom();
  const origins = useOrigin();
  console.log(uoms);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
      <fieldset className="grid gap-4 m-4 p-4 border-2 rounded-2xl">
        <legend className="fieldset-legend">Add Material</legend>
        <label className="floating-label">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-md w-full"
          />
          <span>Name</span>
        </label>
        <select
          defaultValue="Pick a Origin"
          name="originId"
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
          className="select w-full"
        >
          <option disabled={true}>Pick a UOM</option>
          {uoms?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>

        <input type="file" name="image" className="file-input  w-full" />

        <div className="grid justify-items-center">
          <button className="btn w-6/12">Save</button>
        </div>
      </fieldset>
    </form>
  );
};

export default AddMaterial;
