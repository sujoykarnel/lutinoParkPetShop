import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router";
import useMaterial from "../../../hooks/useMaterial";
import _ from "lodash";
import { api } from "../../../api/api";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";

const Materials = () => {
  const { materials, refetch } = useMaterial();
  console.log(materials);

  // handle status toggle
  const haldleStatusToggle = async (currentStatus, id) => {
    const updateStatus = !currentStatus;

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      text: `Want to ${updateStatus ? "Active" : "Inactive"}.`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Do it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await api
          .patch(`/materials/${id}`, { isActive: updateStatus })
          .then((res) => {
            if (res.data) {
              refetch();
              Swal.fire({
                text: `This item has been ${
                  updateStatus ? "Actived" : "Inactivated"
                }.`,
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Something went wrong!",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            if (err) {
              Swal.fire({
                title: "Something went wrong!",
                icon: "error",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <SectionTitle title={"Materials"} />
      <div>
        <Link to={"addMaterial"}>
          <button className="btn">Add New</button>
        </Link>
      </div>
      <div className="divider"></div>
      <div>
        <div className="overflow-auto flex-1 max-h-100">
          <table className="table table-zebra table-pin-rows min-w-full max-h-full">
            <thead>
              <tr className="bg-red-200">
                <th>SL</th>
                <th>Item Name</th>
                <th>Primary UoM</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {materials?.map((row, index) => (
                <tr key={row._id} className="hover:bg-red-100 text-nowrap">
                  <td>{index + 1}</td>
                  <td>{row?.name}</td>
                  <td>{row?.primaryUom}</td>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={row.isActive}
                      onChange={() => haldleStatusToggle(row.isActive, row._id)}
                      className="toggle border-red-600 bg-red-500 checked:border-indigo-500 checked:bg-indigo-400 checked:text-indigo-800"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Materials;
