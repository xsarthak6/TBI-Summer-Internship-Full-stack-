function Toast({ message }) {
  return (
    <div className="fixed top-5 right-5 bg-green-700 text-white px-5 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
}

export default Toast;