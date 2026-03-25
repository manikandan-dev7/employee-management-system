const ConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <p>Are you sure you want to delete?</p>

      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Yes</button>
    </div>
  );
};

export default ConfirmModal;