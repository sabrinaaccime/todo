import { FaSun, FaMoon, FaCheckSquare } from "react-icons/fa";

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-title">
        <FaCheckSquare className="logo" />
        <h1>TODO</h1>
      </div>
      <button
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}
export default Header;
