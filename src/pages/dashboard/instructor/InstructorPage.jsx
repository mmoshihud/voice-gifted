import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const InstructorPage = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const response = await axios.get(
      "http://localhost:5000/users/role/instructor"
    );
    return response.data;
  });
  return (
    <div className="grid grid-cols-4 gap-4">
      {instructors.map((instructor) => (
        <div key={instructor._id} className="mb-4 rounded-xl shadow-lg">
          <img
            className="w-full rounded-xl"
            src={instructor.photoUrl}
            alt="Product Image"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
              Name: {instructor.name}
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="mb-2 text-lg font-bold">
              Email: {instructor.email}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorPage;
