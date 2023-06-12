import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ModalForm from "../../../components/modal/ModalForm";
import SectionTitle from "../../../components/section-title/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ClassList = () => {
  const [axiosSecure] = useAxiosSecure();
  const [disabledButtons, setDisabledButtons] = useState({});

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const response = await axiosSecure("/classes");
    return response.data;
  });

  const handlePermission = (id, type) => {
    setDisabledButtons((prevState) => ({
      ...prevState,
      [id]: true,
    }));

    let permission = "";
    if (type === "approve") {
      permission = "approved";
    } else if (type === "deny") {
      permission = "denied";
    }
    fetch(`http://localhost:5000/class/permission/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        permission: permission,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
        }
      });
  };
  return (
    <>
      <SectionTitle heading="List Of Classes"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classData) => (
              <tr key={classData._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={classData.image} alt="Class Image" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{classData.name}</div>
                </td>
                <td>{classData.instructorName}</td>
                <td>{classData.instructorEmail}</td>
                <td>{classData.availableSeats}</td>
                <td>${classData.price}</td>
                <td>{classData.status}</td>
                <th>
                  <button
                    onClick={() => handlePermission(classData._id, "approve")}
                    disabled={disabledButtons[classData._id]}
                    className="btn-success btn mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handlePermission(classData._id, "deny")}
                    disabled={disabledButtons[classData._id]}
                    className="btn-error btn mr-2"
                  >
                    Deny
                  </button>
                  <ModalForm classId={classData._id} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClassList;
