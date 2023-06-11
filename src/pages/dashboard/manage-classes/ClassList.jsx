import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/section-title/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ClassList = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const response = await axiosSecure("/classes");
    return response.data;
  });
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
                <th>
                  <button className="btn-success btn mr-2">Approve</button>
                  <button className="btn-error btn mr-2">Deny</button>
                  <button className="btn-info btn">Details</button>
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