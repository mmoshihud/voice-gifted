import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ModalForm = ({ classId }) => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axiosSecure
      .patch(`/feedback/${classId}`, {
        feedback: data.feedback,
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <button
        className="btn-primary btn mr-2"
        onClick={() => window.my_modal_2.showModal()}
      >
        Feedback
      </button>
      <dialog id="my_modal_2" className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="form-control modal-box w-full"
        >
          <label className="label">
            <span className="label-text">Give Feedback</span>
          </label>
          <input
            type="text"
            {...register("feedback")}
            placeholder="Type Feedback here here"
            className="input-bordered input w-full"
          />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => document.getElementById("my_modal_2").close()}
              className="btn"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ModalForm;
