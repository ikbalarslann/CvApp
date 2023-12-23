import Colorpicker from "../colorpicker/Colorpicker.jsx";

const Sidebar = ({ setLayout }) => {
  const handleOnClick = (e) => {
    setLayout(e.target.innerText.toLowerCase());
  };

  return (
    <div className="sidebar">
      <div className="sidebar__layout-options">
        Layouts
        <button onClick={handleOnClick}>top</button>
        <button onClick={handleOnClick}>left</button>
        <button onClick={handleOnClick}>right</button>
      </div>
      <div className="sidebar__colorpicker">
        <Colorpicker />
      </div>
    </div>
  );
};

export default Sidebar;
