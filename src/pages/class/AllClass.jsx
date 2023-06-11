import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllClass = () => {
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const response = await axios.get("http://localhost:5000/all-classes");
    return response.data;
  });
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-8">
        {classes.map((classData) => (
          <div key={classData._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{classData.name}</h2>
              <p>${classData.price}</p>
              <div className="card-actions justify-end">
                <button className="btn-primary btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
