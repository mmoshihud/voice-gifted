import SectionTitle from "../../../components/section-title/SectionTitle";

const ClassList = () => {
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
            {/* row 1 */}
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://images.unsplash.com/photo-1683009686716-ac2096a5a73b"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">Hart Hagerty</div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>ad@g.com</td>
              <td>10</td>
              <td>$10</td>
              <th>
                <button className="btn-success btn mr-2">Approve</button>
                <button className="btn-error btn mr-2">Deny</button>
                <button className="btn-info btn">Details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClassList;
