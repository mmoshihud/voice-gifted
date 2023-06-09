import { useQuery } from "@tanstack/react-query";

const UserList = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const response = await fetch("http://localhost:5000/users");
    return response.json();
  });

  const makeAdminHandler = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
        }
      });
  };
  return (
    <>
      <h1>Total Users {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table-zebra table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td onClick={() => makeAdminHandler(user)}>make admin</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
