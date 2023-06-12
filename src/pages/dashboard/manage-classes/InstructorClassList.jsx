import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Modal from "../../../components/modal/Modal";
import SectionTitle from "../../../components/section-title/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const InstructorClassList = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const response = await axiosSecure(`/classes/${user.email}`);
    return response.data;
  });
  return (
    <>
      <Helmet>
        <title>My Class</title>
      </Helmet>
      <SectionTitle heading="My Classes"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
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
                <td>{classData.availableSeats}</td>
                <td>${classData.price}</td>
                <td className="uppercase">{classData.status}</td>
                <th>
                  <Modal feedback={classData.feedback} />
                  <Link
                    to={"/dashboard/edit-class/" + classData._id}
                    className="btn-success btn"
                  >
                    Edit
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InstructorClassList;
