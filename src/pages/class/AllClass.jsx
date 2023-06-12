import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useStudent from "../../hooks/useStudent";

const AllClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [isStudent] = useStudent();
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const response = await axios.get(
      "https://summer-camp-backend.vercel.app/all-classes"
    );
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
          instructorName: classInfo.instructorName,
          instructorEmail: classInfo.instructorEmail,
        })
        .then((data) => {
          console.log(data.data);
          Swal.fire({
            title: "Success",
            text: "Class has been added to the Cart Please Visit Dashboard",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Swal.fire({
        title: "User is not Student",
        text: "Please Login as An Student",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      console.log("plesase login");
    }
  };
  return (
    <>
      <Helmet>
        <title>ALL Classes</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {classes.map((classData) => (
            <div key={classData._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={classData.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{classData.name}</h2>
                <p>Price: ${classData.price}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleAddToCart(classData)}
                    className="btn-secondary btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllClass;
