import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolled = [] } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    queryFn: async () => {
      const response = await axiosSecure(`/enrollments?email=${user?.email}`);
      console.log(response);
      return response.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Enrolled Classes</title>
      </Helmet>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sl</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((enrol) =>
            enrol.classDetails.map((classDetail, index) => (
              <tr key={classDetail.classId}>
                <th>{index + 1}</th>
                <td>{classDetail.name}</td>
                <td>{classDetail.instructorName}</td>
                <td>{classDetail.instructorEmail}</td>
                <td>{classDetail.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default EnrolledClasses;
