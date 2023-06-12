import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/section-title/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserShield, FaChalkboardTeacher } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const UserList = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const response = await axiosSecure("/users");
    const newArray = response.data.filter((item) => item.email !== user?.email);
    return newArray;
  });

  const handleUserPromotion = (user) => {
    console.log(user.role);

    if (user.role !== "admin") {
      fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
          }
        });
    } else if (user.role !== "instructor") {
      fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            refetch();
          }
        });
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>User List</title>
      </Helmet>
      <SectionTitle heading="List Of Users"></SectionTitle>
      <table className="table-zebra table text-center">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className="badge badge-ghost badge-md bg-warning uppercase">
                  {user.role}
                </span>
              </td>
              <td>
                <button
                  onClick={() => handleUserPromotion(user)}
                  className={`mr-2 rounded ${
                    user.role === "admin" ? "bg-red-900" : "bg-red-600"
                  } p-3 text-white`}
                  title="Make Admin"
                  disabled={user.role === "admin"}
                >
                  <FaUserShield size={30} />
                </button>
                <button
                  onClick={() => handleUserPromotion(user)}
                  className={`mr-2 rounded ${
                    user.role === "instructor"
                      ? "bg-yellow-900"
                      : "bg-yellow-500"
                  } p-3 text-white`}
                  title="Make Instructor"
                  disabled={user.role === "instructor"}
                >
                  <FaChalkboardTeacher size={30} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
