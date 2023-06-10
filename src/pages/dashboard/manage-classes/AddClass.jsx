import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/section-title/SectionTitle";
const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imageResponse) => {
        console.log(imageResponse);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <SectionTitle heading="Add Class"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <h1 className="text-xl font-bold">Class Name:</h1>
          </label>
          <input
            type="text"
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
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <h1 className="text-xl font-bold">Pick a Image for Class</h1>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "A Image for every class is mandatory",
            })}
            className="file-input-bordered file-input w-full max-w-xs"
          />
          {errors.image && (
            <span className="mb-4 text-lg font-bold text-red-600">
              {errors.image.message}
            </span>
          )}
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
            defaultValue="John"
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
            defaultValue="John"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <h1 className="text-xl font-bold">Available Seats</h1>
          </label>
          <input
            type="number"
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

export default AddClass;
