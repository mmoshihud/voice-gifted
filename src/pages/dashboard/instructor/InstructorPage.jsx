import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const InstructorPage = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const response = await axios.get(
      "https://summer-camp-backend.vercel.app/users/role/instructor"
    );
    return response.data;
  });
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {instructors.map((instructor) => (
            <div key={instructor._id} className="mb-4 rounded-xl shadow-lg">
              <img
                className="w-full rounded-xl object-cover"
                src={instructor.photoUrl}
                alt="Product Image"
                style={{ height: "300px" }}
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
      </div>
    </>
  );
};

export default InstructorPage;
