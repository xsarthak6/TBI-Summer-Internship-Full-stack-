function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  const styles = {
    primary:
      "bg-green-700 hover:bg-green-800 text-white",

    secondary:
      "bg-white border border-green-700 text-green-700 hover:bg-green-50",

    dark:
      "bg-gray-900 hover:bg-black text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;