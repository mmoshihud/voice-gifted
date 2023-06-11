import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/section-title/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const InstructorClassList = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const response = await axiosSecure(`/classes/${user.email}`);
    console.log(response);
    return response.data;
  });
  return (
    <>
      <SectionTitle heading="My Classes"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
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
                <td>{classData.availableSeats}</td>
                <td>${classData.price}</td>
                <th>
                  <button className="btn-primary btn mr-2">Feedback</button>
                  <button className="btn-success btn">Edit</button>
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
