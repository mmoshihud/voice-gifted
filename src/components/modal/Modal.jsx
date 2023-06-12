const Modal = ({ feedback }) => {
  return (
    <>
      <button
        className="btn-primary btn mr-2"
        onClick={() => window.my_modal_1.showModal()}
      >
        Feedback
      </button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="text-lg font-bold">Here is your Feedback</h3>
          <p className="py-4">{feedback}</p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
