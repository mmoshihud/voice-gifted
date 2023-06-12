import axios from "axios";
import useCart from "../../../hooks/useCart";

const SelectedClasses = () => {
  const [carts, refetch] = useCart();

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/carts/${id}`).then(() => {
      refetch();
    });
  };

  return (
    <table className="table text-center">
      {/* head */}
      <thead>
        <tr>
          <th>Sl</th>
          <th>Class Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {carts.map((item, index) => (
          <tr key={item._id}>
            <th>{index + 1}</th>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn-error btn mr-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SelectedClasses;
