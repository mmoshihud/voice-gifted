import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useStudent from "../../hooks/useStudent";

const AllClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [isStudent] = useStudent();
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const response = await axios.get("http://localhost:5000/all-classes");
    return response.data;
  });

  const handleAddToCart = (classInfo) => {
    console.log(classInfo);
    if (isStudent) {
      axiosSecure
        .post("/carts", {
          classId: classInfo._id,
          name: classInfo.name,
          price: classInfo.price,
          email: user.email,
        })
        .then((data) => {
          console.log(data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("plesase login");
    }
  };
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
                <button
                  onClick={() => handleAddToCart(classData)}
                  className="btn-primary btn"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
