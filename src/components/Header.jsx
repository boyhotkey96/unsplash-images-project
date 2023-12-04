import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { useGlobalContext } from "../context/AppProvider";

function Header() {
  const { isDarkMode, toggleDarkMode } = useGlobalContext();

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <section className="header">
      <button className="toggle-container" onClick={handleToggle}>
        {isDarkMode ? (
          <IoIosMoon className="dark-icon" />
        ) : (
          <IoIosSunny className="light-icon" />
        )}
      </button>
    </section>
  );
}

export default Header;
