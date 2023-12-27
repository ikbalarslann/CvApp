import Layout from "../customize/layout/Layout.jsx";
import Colorpicker from "../customize/colorpicker/Colorpicker.jsx";
import Fonts from "../customize/fonts/Fonts.jsx";

const Customize = ({ setLayout }) => {
  return (
    <div className="customize-section">
      <div className="sidebar__layout">
        <h1>Layout</h1>
        <Layout setLayout={setLayout} />
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

export default Customize;
