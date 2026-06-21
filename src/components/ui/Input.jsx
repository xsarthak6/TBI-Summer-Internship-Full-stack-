function Input({
  label,
  type = "text",
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}

export default Input;