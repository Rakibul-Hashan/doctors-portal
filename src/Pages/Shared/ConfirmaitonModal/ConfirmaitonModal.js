import React from "react";

const ConfirmaitonModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
  successButtonName
}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label 
             htmlFor="my-modal" className="btn"  onClick={()=>successAction(modalData)}>
               
              {successButtonName}
            </label>
            <button onClick={closeModal} className="btn  btn-outline">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmaitonModal;
