import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../components/section-title/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const EditClass = () => {
  const { id } = useParams();
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;
  const [axiosSecure] = useAxiosSecure();

  const { data: classData = [] } = useQuery(["class"], async () => {
    const response = await axiosSecure(`/class/edit/${id}`);
    return response.data;
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.image[0]) {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      fetch(imageHostingUrl, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((imageResponse) => {
          console.log(imageResponse);
          const imageURL = imageResponse.data.url;
          const { name, price, availableSeats } = data;

          axiosSecure
            .put(`/class/update/${id}`, {
              name,
              image: imageURL,
              price: parseFloat(price.replace("$", "")),
              availableSeats,
              status: "pending",
            })
            .then((data) => {
              console.log(data.data);
              if (data.data.insertedId) {
                reset();
              }
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const { name, price, availableSeats } = data;
      axiosSecure
        .put(`/class/update/${id}`, {
          name,
          price: parseFloat(price.replace("$", "")),
          availableSeats,
          status: "pending",
        })
        .then((data) => {
          console.log(data.data);
          if (data.data.insertedId) {
            reset();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <>
      <SectionTitle heading="Edit Class"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <h1 className="text-xl font-bold">Class Name:</h1>
          </label>
          <input
            type="text"
            defaultValue={classData.name}
            {...register("name", {
              required: "Class name is required",
            })}
            placeholder="Enter Class Name"
            className="input-bordered input w-full text-lg"
          />
          {errors.name && (
            <span className="mb-4 text-lg font-bold text-red-600">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <h1 className="text-xl font-bold">
              Pick image if you want to update, Here current image link:{" "}
              {classData.image}
            </h1>
          </label>
          <input
            type="file"
            {...register("image")}
            className="file-input-bordered file-input w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <h1 className="text-xl font-bold">Instructor Name:</h1>
          </label>
          <input
            type="text"
            placeholder="Enter Instructor Name"
            className="input-bordered input w-full text-lg"
            readOnly
            defaultValue={classData.instructorName}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <h1 className="text-xl font-bold">Instructor Email:</h1>
          </label>
          <input
            type="text"
            placeholder="Enter Instructor Email"
            className="input-bordered input w-full text-lg"
            readOnly
            defaultValue={classData.instructorEmail}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <h1 className="text-xl font-bold">Available Seats</h1>
          </label>
          <input
            type="number"
            defaultValue={classData.availableSeats}
            {...register("availableSeats", {
              required: "Seat count required",
              min: { value: 1, message: "Seat count must be at least 1" },
            })}
            placeholder="Total Available Seats"
            className="input-bordered input w-full max-w-xs text-lg"
          />
          {errors.availableSeats && (
            <span className="mb-4 text-lg font-bold text-red-600">
              {errors.availableSeats.message}
            </span>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <h1 className="text-xl font-bold">Price</h1>
          </label>
          <input
            defaultValue={classData.price}
            type="text"
            {...register("price", {
              required: "Price is required",
              pattern: {
                value: /^\$\d+$/,
                message: "$ and number allowed",
              },
            })}
            placeholder="Enter Price in $ format"
            className="input-bordered input w-full text-lg"
          />
          {errors.price && (
            <span className="mb-4 text-lg font-bold text-red-600">
              {errors.price.message}
            </span>
          )}
        </div>
        <button className="btn-neutral btn mt-4">Submit</button>
      </form>
    </>
  );
};

export default EditClass;
