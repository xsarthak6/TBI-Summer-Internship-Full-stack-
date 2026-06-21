import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-green-700 text-white"
    >
      {theme === "light"
        ? "🌙 Dark Mode"
        : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;