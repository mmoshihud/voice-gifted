const SelectedClasses = () => {
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Sl</th>
          <th>Class Name</th>
          <th>Instructor Name</th>
          <th>Instructor email</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control</td>
          <td>Quality Control</td>
          <td>$12</td>
          <td>
            <button className="btn-success btn mr-2">Pay</button>
            <button className="btn-error btn mr-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SelectedClasses;
