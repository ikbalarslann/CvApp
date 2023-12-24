import Colorpicker from "../colorpicker/Colorpicker.jsx";
import Fonts from "../fonts/Fonts.jsx";
const Sidebar = ({ setLayout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__layout">
        <h1>Layout</h1>
        <div className="sidebar__layout-options">
          <div>
            <div
              className="sidebar__layout-options__option top"
              onClick={() => setLayout("top")}
            ></div>
            <div className="sidebar__layout-options__option-label">top</div>
          </div>
          <div>
            <div
              className="sidebar__layout-options__option left"
              onClick={() => setLayout("left")}
            ></div>
            <div className="sidebar__layout-options__option-label">left</div>
          </div>
          <div>
            <div
              className="sidebar__layout-options__option right"
              onClick={() => setLayout("right")}
            ></div>
            <div className="sidebar__layout-options__option-label">right</div>
          </div>
        </div>
      </div>
      <div className="sidebar__colorpicker">
        <h1>Color</h1>
        <Colorpicker />
      </div>
      <div className="sidebar__fonts">
        <h1>Fonts</h1>
        <Fonts />
      </div>
    </div>
  );
};

export default Sidebar;
