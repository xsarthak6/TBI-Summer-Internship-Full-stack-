function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-3xl font-bold cursor-pointer"
            >
            &times;
            </button>
        </div>

        {children}

      </div>
    </div>
  );
}

export default Modal;