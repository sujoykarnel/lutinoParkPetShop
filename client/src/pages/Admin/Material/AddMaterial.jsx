import React from "react";

const AddMaterial = () => {
  return (
    <fieldset className="grid gap-4 max-w-md mx-auto m-4 p-4 border-2 rounded-2xl">
      <legend className="fieldset-legend">Add Material</legend>
      <label className="floating-label">
        <input
          type="text"
          placeholder="Name"
          className="input input-md w-full"
        />
        <span>Name</span>
      </label>
      <select defaultValue="Pick a Unit" className="select w-full">
        <option disabled={true}>Pick a Unit</option>
        <option>Kg</option>
        <option>Ltr</option>
        <option>Pcs</option>
      </select>

      <input
        type="file"
        placeholder="Upload Image"
        className="file-input  w-full"
      />

      <div className="grid justify-items-center">
        <button className="btn w-6/12">Save</button>
      </div>
    </fieldset>
  );
};

export default AddMaterial;
